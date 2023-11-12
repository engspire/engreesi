const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "Good morning, doctor. I've been feeling unwell lately and wanted to get some advice.",
  "Good morning, Ruwan. What seems to be the problem?",
  "I've had a persistent headache for the past week, and I've been feeling very tired. Also, I've had a fever on and off.",
  "I see. Let's start by checking your temperature and discussing your symptoms in more detail.",
  "Sure, doctor. I'm also experiencing a sore throat and some coughing.",
  "Thank you for sharing that, Ruwan. It could be due to a respiratory infection. I'll perform an examination and recommend some tests to confirm the diagnosis.",
  "Alright, doctor. What should I do in the meantime to alleviate my symptoms?",
  "Ruwan, I recommend getting plenty of rest, staying hydrated, and taking over-the-counter pain relievers if needed. I'll also prescribe some medication after the examination.",
  "Thank you, doctor. I'll follow your advice and hope to recover soon.",
  "You're welcome, Ruwan. Take good care of yourself, and if your condition worsens, don't hesitate to come back for a follow-up. Get well soon!",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "nova" : "fable", (index + 1).toString())
})