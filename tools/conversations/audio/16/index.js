const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "Good morning, sir.",
  "Good morning, Kasun. Did you bring your homework assignment today?",
  "Uh, I'm really sorry, but I forgot to do it. I had some family stuff last night.",
  "I understand that sometimes life gets in the way, Kasun, but it's important to complete your assignments. Can you make sure to turn it in tomorrow?",
  "Yes, I promise I'll make it up tomorrow, sir. I won't forget this time.",
  "That's good to hear, Kasun. Remember, being responsible with your homework is an important part of your education. Just do your best next time.",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "onyx" : "echo", (index + 1).toString())
})