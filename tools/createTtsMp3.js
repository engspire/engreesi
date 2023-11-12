const fs = require("fs");
const path = require("path");
const OpenAI = require("openai");
const filenamify = import("filenamify");

const apiKey = 'OPENAI_API_KEY';

/**
 * Creates an MP3 file using OpenAI Text-to-Speech (TTS) API.
 *
 * @param {string} text - The text to be converted to speech.
 * @param {string} voice - The voice model to be used ["alloy", "echo", "fable", "onyx", "nova", "shimmer"]. 🔗 https://platform.openai.com/docs/guides/text-to-speech/voice-options
 * @returns {Promise<string>} - A Promise that resolves to the generated MP3 file name.
 */
async function createTtsMp3(text, voice) {
  // Initialize OpenAI instance with API key
  const openai = new OpenAI({ apiKey });

  // Generate a safe filename using the input text
  const fileName = (await filenamify).default(text);

  // Resolve the file path for the generated MP3
  const speechFile = path.resolve(`./${fileName}.mp3`);

  // Request speech generation from OpenAI TTS API
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: voice,
    input: text,
  });

  // Convert the response to a Buffer
  const buffer = Buffer.from(await mp3.arrayBuffer());

  // Write the Buffer to the specified file path
  await fs.promises.writeFile(speechFile, buffer);

  // Log the success message
  console.log(`Created ${fileName}`);

  // Return the generated MP3 file name
  return `${fileName}.mp3`;
}
