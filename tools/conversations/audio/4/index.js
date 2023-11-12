const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "Good morning, Mr. Silva. I wanted to discuss my future at the company. I've been with the company for a decade now, and I'm eager to take on more responsibilities.",
  "Good morning, Mr. Perera. I'm glad to hear your interest in career development. What specifically are you aiming for?",
  "I've been eyeing the Branch Manager position for some time now. I believe I have the skills and experience to excel in that role and contribute to the company's growth. Can we discuss the possibilities?",
  "I appreciate your enthusiasm, Mr. Perera. Let's explore this further. What specific achievements or skills do you think make you a strong candidate for the Branch Manager role?",
  "Well, during my tenure as Production Manager, I've consistently improved our production processes, reduced costs, and increased efficiency. I've also successfully led a team of dedicated professionals. I believe these experiences make me a valuable candidate for the Branch Manager position.",
  "Those are indeed significant accomplishments, Mr. Perera. Let's look into the requirements for the Branch Manager role and see how your skills align. We can discuss the next steps after that.",
  "That sounds like a great plan. I'll gather more information on the role and its requirements and provide you with a comprehensive proposal. Thank you for considering my request, Mr. Silva.",
  "You're welcome, Mr. Perera. I appreciate your proactive approach. Let's reconvene once you've prepared your proposal, and we'll take it from there.",
  "Thank you, Mr. Silva. I'm excited about the potential opportunity, and I'm committed to proving my readiness for the Branch Manager position.",
  "That's the spirit, Mr. Perera. I look forward to our next meeting. Have a productive day.",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "echo" : "onyx", (index + 1).toString())
})