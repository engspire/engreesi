const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "Hey, Jehan, are you planning to attend the annual party this year?",
  "I'm not sure, Supuni. I've been on the fence about it. How about you?  ",
  "I'm in the same boat. I mean, it can be fun, but I'm not always a fan of big parties with coworkers.",
  "Exactly, the whole 'office party' thing can get a bit awkward sometimes. Plus, it's on a weekend, and I could use some rest.  ",
  "That's true. On the other hand, it's a good opportunity to socialize and network. We might even enjoy it more than we expect.",
  "You have a point, Supuni. I'll think it over. Maybe a little change of scenery and some fun with colleagues won't hurt.",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "alloy" : "nova", (index + 1).toString())
})