const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "Hi, doctor. I'm here for my tooth filling appointment.",
  "Hello, Supuni. Nice to see you. Let's get started. Please have a seat in the chair.",
  "I've been a bit nervous about this, but I trust you, doctor.",
  "I appreciate your trust, Supuni. We'll make sure it's as comfortable as possible. Let me take a look at your tooth first.",
  "Thanks, doctor. I've had some sensitivity in that tooth for a while now, so I'm glad we're doing this.",
  "It's important to address it before it gets worse. Don't worry; I'll do my best to minimize any discomfort during the procedure. Let me prepare everything.",
  "I appreciate that, doctor. I know you're the best at what you do.",
  "Thank you, Supuni. Let's get started. This will be over before you know it.",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "onyx" : "nova", (index + 1).toString())
})