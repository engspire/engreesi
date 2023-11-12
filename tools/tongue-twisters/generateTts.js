const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");
const filenamify = import("filenamify");
const csv = require('csv-parser');

const apiKey = 'OPENAI_API_KEY';

async function createTtsMp3(text) {
  const openai = new OpenAI({ apiKey });

  const fileName = (await filenamify).default(text);

  const speechFile = path.resolve(`./${fileName}.mp3`);

  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: text,
  });

  const buffer = Buffer.from(await mp3.arrayBuffer());

  await fs.promises.writeFile(speechFile, buffer);

  return `${fileName}.mp3`;
}

async function createMp3File(entries) {
  for (const entry of entries) {
    const { Text } = entry;
    
    const fileName = await createTtsMp3(Text);

    console.log(`Created ${fileName}`);
  }
}

const entries = []; // An array to store CSV entries

// Read the CSV file and populate the 'entries' array
fs.createReadStream('index.csv')
  .pipe(csv())
  .on('data', (data) => {
    entries.push(data);
  })
  .on('end', () => {
    createMp3File(entries);
    console.log('Running script');
  });