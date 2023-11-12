const axios = require('axios');
const fs = require('fs');
const csv = require('csv-parser');

// Define your GPT-3 API key
const apiKey = 'OPENAI_API_KEY';

async function generateExampleSentence(verb, usage) {
  const prompt = `
    I'm an English teacher trying to teach students whose mother tongue is Sinhala.
    I'm trying to teach the verb phrase '${verb}' and its usage.
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

async function createMdxFile(entries) {
  let mdxContent = ''; // Initialize an empty MDX content

  for (const entry of entries) {
    const { Verb: Entry, Pronunciation, SinhalaMeanings, Usage } = entry;
    const formattedUsages = Usage.split('\n');

    let Verb = Entry.replace("*", "");

    mdxContent += `## ${Entry}\n\n`;
    mdxContent += `🗣️ ${Pronunciation}\n\n`;
    mdxContent += '### ' + SinhalaMeanings.split(',').map((meaning) => `${meaning.trim()}`).join(', ') + '\n\n';
    mdxContent += `### How to use "${Verb}" in a sentence:\n\n`;
    
    for (const formattedUsage of formattedUsages) {
      let usage = formattedUsage.replace(/~/g, Verb);
      const exampleSentence = await generateExampleSentence(Verb, usage);
      mdxContent += `#### ${usage}\n\n- ${exampleSentence}\n\n`;
    }

    mdxContent += `<br/>\n\n`;
  }

  // Write the aggregated MDX content to a single file
  fs.writeFileSync('examples.mdx', mdxContent);
  console.log('Created examples.mdx');
}

const entries = []; // An array to store CSV entries

// Read the CSV file and populate the 'entries' array
fs.createReadStream('index.csv')
  .pipe(csv())
  .on('data', (data) => {
    entries.push(data);
  })
  .on('end', () => {
    // Call the function to create the single MDX file from all entries
    createMdxFile(entries);
    console.log('Running script');
  });
