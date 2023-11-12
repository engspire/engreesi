const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");
const filenamify = import("filenamify");

const apiKey = 'OPENAI_API_KEY';


async function generateTts(text) {
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
}

// generateTts("Today is a wonderful day to build something people love!");
generateTts("Brave brigadiers.");