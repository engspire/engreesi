const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "Excuse me, sir. Can you help me find the Gangaaraama Temple? I seem to be a bit lost.",
  "Of course, I can help! You're not too far from it. Just head down this street, take a left at the big red building, and you'll see it on your right.",
  "Thank you! Is it within walking distance from here?",
  "Yes, it's a short walk, about 10-15 minutes. You'll enjoy the scenic route along the lake as you get there.",
  "Great! Can you tell me more about the temple? Is it open to tourists today?",
  "The Gangaaraama Temple is a beautiful place with a rich history. It's open to tourists today. You can explore the temple, museum, and even feed the temple's sacred turtles in the pond.",
  "That sounds amazing! Thank you so much for your help. I can't wait to visit the temple now.",
  "You're welcome! Enjoy your visit to the Gangaaraama Temple, and if you have any more questions or need assistance, don't hesitate to ask.",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "onyx" : "fable", (index + 1).toString())
})