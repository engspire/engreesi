const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "Hey Rusiru, we need to make a shopping list for this week. What do you think we should get?",
  "Let's start with the basics - we definitely need rice, some vegetables, and eggs.",
  "Right, rice and veggies are a must. Should we get some fruit too, like bananas and papayas?",
  "Sounds good! And don't forget the coconut milk for our curry. We can also grab some chicken for a change.",
  "Sure, coconut milk and chicken. How about snacks? I think we need some crisps and biscuits too.",
  "Absolutely, let's not forget those. And let's pick up some spices for our curries as well.",
  "Great! So, we have rice, veggies, eggs, fruit, coconut milk, chicken, crisps, biscuits, and spices on our list. Anything else?",
  "I think that covers it for this week. Let's head to the supermarket and grab these essentials.",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "onyx" : "nova", (index + 1).toString())
})