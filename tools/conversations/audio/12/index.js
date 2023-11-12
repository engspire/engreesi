const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "Hi Rajitha, it's been so long since we've seen each other! How's everything with you?",
  "Hello, Supuni! I've been busy with work, but everything's good. How's the family back home?",
  "They're all doing well. My son just graduated from university last week, and we had a big celebration!",
  "That's fantastic, Supuni! Congratulations to him. And how's your garden? I remember you were so passionate about it.",
  "Oh, my garden is thriving! I've added some new plants, and the roses are in full bloom now. How about your new job?",
  "I'm enjoying my new job. It's challenging, but I'm learning a lot. By the way, have you heard from Ruvini Aunty? I heard she was visiting Sri Lanka too.",
  "Yes, Ruvini Aunty is here. She arrived last week, and we're planning a big family dinner tomorrow. You should join us!",
  "That sounds like a great plan, Supuni. I'd love to catch up with Ruvini Aunty and the rest of the family. Thanks for the invitation!",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "echo" : "shimmer", (index + 1).toString())
})