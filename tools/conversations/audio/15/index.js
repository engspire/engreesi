const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "Hello! This temple is stunning. Can you tell me a bit about its history?",
  "Of course! This temple is called the \"Temple of the Sacred Tooth Relic,\" and it has a rich history dating back to ancient times. It houses a tooth relic of Buddha, which is highly revered by Buddhists in Sri Lanka.",
  "That's fascinating! Tell me more about the customs and rituals practiced here.",
  "Well, one of the main rituals is the daily \"Dalada Perahera,\" a grand procession where the sacred tooth relic is paraded through the streets of Kandy. It's a major cultural event with traditional dances, music, and beautifully adorned elephants.",
  "Sounds like a spectacular event! What about the dress code for visitors to the temple?",
  "Visitors should dress modestly when entering the temple. It's customary to cover your shoulders and knees, and it's a sign of respect. You can also borrow shawls or sarongs at the entrance if needed.",
  "Thank you for the information! I'll make sure to follow those customs. Is there a particular time of day when the temple is most serene for meditation?",
  "The early mornings are the best time for meditation. It's quiet, and the temple complex is bathed in a peaceful atmosphere. You can sit by the beautiful Kandy Lake nearby and enjoy the tranquility.",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "fable" : "onyx", (index + 1).toString())
})