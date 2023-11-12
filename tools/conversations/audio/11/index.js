const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "I'm very excited to be here, Mr. Silva. Thank you for considering my application for the marketing manager position.",
  "You're welcome, Priya. We're pleased to have you here. Can you tell me more about your relevant qualifications and experiences?  ",
  "Certainly, Mr. Silva. I have a master's degree in marketing and five years of experience in the field. I've successfully managed marketing campaigns for several companies, increasing their online presence and sales.",
  "Impressive, Priya. Can you provide an example of a particularly challenging project you've worked on and how you overcame the difficulties?  ",
  "Of course, Mr. Silva. In my previous job, we had to launch a new product in a highly competitive market. It was challenging, but I implemented a comprehensive market research strategy, identified our target audience, and created a unique selling proposition. As a result, our sales increased by 30% in the first quarter.",
  "That's quite an achievement, Priya. How do you stay updated with the latest marketing trends and tools?  ",
  "I'm a member of the Sri Lanka Marketing Association, and I regularly attend industry conferences and workshops. I also follow industry blogs and subscribe to marketing journals to keep myself informed about the latest trends and tools.",
  "That's great to hear, Priya. We appreciate your commitment to professional development. We'll be in touch soon with our decision. Thank you for coming in today.",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "onyx" : "nova", (index + 1).toString())
})