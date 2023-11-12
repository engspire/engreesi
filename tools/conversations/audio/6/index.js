const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "Hi there, I've never been to a Sri Lankan restaurant before. Can you recommend something delicious for me to try?",
  "Of course, Sarah! Our chicken curry is a popular choice. It's flavorful and comes with rice. How do you like your spice level?",
  "I can handle some spice, but not too much. Medium spice should be fine.",
  "Great choice, Sarah. Our medium-spice chicken curry is a wonderful blend of flavors. Anything to drink with that?",
  "I'd like a glass of mango lassi, please. It sounds refreshing.",
  "Certainly, one mango lassi coming up! Anything else, like an appetizer or dessert?",
  "I think I'll pass on appetizers for now, but could you recommend a traditional Sri Lankan dessert to end my meal?",
  "Certainly, our \"Watalappan\" is a delicious choice. It's a creamy coconut custard with a hint of jaggery. You'll love it!",
  "That sounds perfect! I'll go with the chicken curry, mango lassi, and the Watalappan for dessert, please.",
  "Excellent choice, Sarah. Your order will be ready shortly. Enjoy your meal!",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "alloy" : "nova", (index + 1).toString())
})