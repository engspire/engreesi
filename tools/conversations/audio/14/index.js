const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "Wow, that movie was something else, Rajitha! What did you think of it?",
  "I know, Harshi! It was quite a ride. The plot was so intense, and the acting was fantastic.",
  "I agree! I couldn't take my eyes off the screen. What did you think of the main character's performance?",
  "Oh, the lead actor was phenomenal. They portrayed the character's emotions so well. I was totally invested in their journey.",
  "I also liked how they developed the supporting characters. It added depth to the story.",
  "Absolutely! Those side characters had their own arcs and made the movie more engaging.",
  "The plot twists were unexpected, weren't they? I didn't see that coming!",
  "Oh, those twists kept me at the edge of my seat. I love it when a movie can surprise me like that!",
  "The cinematography was stunning too. Those scenic shots were breathtaking.",
  "Yes, the visuals were impressive. They really captured the essence of our beautiful island.",
  "I'm definitely going to recommend this movie to our other friends. It's a must-watch!",
  "Agreed, Harshi. It's one of the best films I've seen recently. Let's plan another movie night soon!",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "alloy" : "nova", (index + 1).toString())
})