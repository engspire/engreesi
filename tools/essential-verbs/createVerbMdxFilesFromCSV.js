const axios = require('axios');
const fs = require('fs');
const csv = require('csv-parser');

// Define your GPT-3 API key
const apiKey = 'OPEN_AI_API_KEY';

async function generateExampleSentence(verb, usage) {
  const prompt = `
    I'm an English teacher trying to teach students whose mother tongue is Sinhala.
    I'm trying to teach the verb phrase 'ask for' and its usage.
    Please provide 1 clear and concise example sentence in English using the verb phrase '${usage}'.
    It must be a simple sentence without conjunctions.
    It must be a statement.
    `;

  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: "gpt-3.5-turbo-instruct",
      prompt,
      max_tokens: 20, // Adjust the token limit as needed
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.choices[0].text.replace(/\n/, "");
  } catch (error) {
    console.error('Error generating example sentence:', error);
    return 'Unable to generate an example sentence.';
  }
}

// Update the createMdxFile function
async function createMdxFile(data) {
  const { Verb, Pronunciation, SinhalaMeanings, Usage } = data;

  const formattedUsages = Usage.split('\n');

  let mdxContent = `---
title: "${Verb}"
---

# ${Verb}

🗣️ ${Pronunciation}

## Sinhala Meaning(s)

${SinhalaMeanings.split(',').map((meaning) => `### ${meaning.trim()}`).join('\n')}

## Usage
`;

  for (const formattedUsage of formattedUsages) {
    // Replace all instances of "~" with the verb in formattedUsage
    let usage = formattedUsage.replace(/~/g, Verb);
    const exampleSentence = await generateExampleSentence(Verb, usage);
    mdxContent += `\n### ${formattedUsage}\n\n- ${exampleSentence}\n\n`;
  }

  const filename = `${Verb.toLowerCase()}.mdx`;

  fs.writeFileSync(filename, mdxContent);
  console.log(`Created ${filename}`);
}

// Read the CSV file
fs.createReadStream('index.csv')
  .pipe(csv())
  .on('data', (data) => {
    createMdxFile(data);
  })
  .on('end', () => {
    console.log('Conversion completed.');
  });
