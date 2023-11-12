const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "Excuse me, could you help me choose an outfit for a special occasion?",
  "Of course, I'd be happy to help. What's the occasion, and do you have any preferences in mind?",
  "It's a family wedding, and I'd like something traditional but also elegant. What do you recommend?",
  "For a wedding, a saree is a great choice. We have a beautiful collection of traditional sarees in various colors and designs. Let's have a look.",
  "I like the idea of a saree. Can you show me some options in shades of blue or green?",
  "Certainly, we have some stunning blue and green sarees. Follow me, and I'll show you the selection.",
  "These sarees are beautiful! Do you have any matching accessories like bangles and earrings to go with them?",
  "Yes, we do. We have a wide range of accessories that would complement these sarees perfectly. Let's pick some together to complete your look.",
  "Great! Thank you for your help. I'm feeling much more confident about what to wear to the wedding now.",
  "You're very welcome. I'm glad I could assist you. If you have any more questions or need further help, please don't hesitate to ask. Enjoy the wedding!",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "nova" : "shimmer", (index + 1).toString())
})