const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "Hey there! Waiting for the bus too?",
  "Yes, I am. It's a long wait, isn't it?",
  "Yeah, it can be. Do you take this bus often?",
  "No, it's my first time on this route. I just moved to the area.",
  "Welcome to the neighborhood! Where did you move from?",
  "Thank you! I moved here from Colombo.",
  "Colombo? That's a big change. What brought you here?",
  "I got a new job in Kandy, so I had to relocate.",
  "That's exciting! I hope you're liking your new job and the city so far.",
  "It's been good, but I'm still adjusting. How about you? Are you from Kandy?",
  "I've been here my whole life. If you need any tips or recommendations, feel free to ask!",
  "That's very kind of you, Kasun. I might take you up on that offer. Thanks!",
  "No problem, Supuni. Just give me a shout anytime. Here comes the bus!",
  "Great! Nice talking to you, Kasun. Have a good day!",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "nova" : "onyx", (index + 1).toString())
})