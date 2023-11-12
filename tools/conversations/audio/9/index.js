const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "I can't wait for our weekend trip to Sri Lanka, Mark! Have you thought about where we should go?",
  "I know, Sarah! I heard Mirissa is beautiful and offers great beach vibes. How about that?",
  "Mirissa sounds fantastic! The pictures I've seen are stunning. What activities can we do there?",
  "Mirissa offers whale watching, surfing, and great seafood. It's perfect for a relaxing and adventurous weekend.",
  "That sounds amazing! How should we get there, by train or by bus?",
  "I think taking the train would be a unique experience. We can enjoy the scenic views along the way.",
  "Great idea, Mark! When should we book the tickets and what's our budget?",
  "We should book the train tickets in advance to secure our seats. I think a budget of $100 each for the whole trip should be reasonable. What do you think?",
  "Sounds good, Mark! Let's book the train tickets soon and get ready for an unforgettable weekend in Mirissa.",
  "Absolutely, Sarah! It's going to be a fantastic adventure. I can't wait to see those whales and enjoy the beach.",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "onyx" : "shimmer", (index + 1).toString())
})