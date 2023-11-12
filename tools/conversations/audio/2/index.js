const { createTtsMp3 } = require("../../../createTtsMp3");

const conversation = [
  "Hello, I'd like to deposit 100,000 Rupees into my grandmother's savings account, please.",
  "Of course, Shehan. I'll be happy to assist you with that. Do you have your grandmother's account details with you?",
  "Yes, I have her account number and her name here. The account number is 1234567890, and her name is Mrs. Kalpani Rajapaksha.",
  "Great. Thank you for providing that information. Just give me a moment to process the deposit.",
  "Sure, take your time.",
  "Thank you for your patience. Your deposit has been successfully processed. Is there anything else you'd like to do today?",
  "No, that's all for today. Thank you for your help!",
  "You're welcome, Shehan. Have a great day, and please convey our regards to your grandmother!",
]

conversation.forEach((line, index) => {
  createTtsMp3(line, index % 2 ? "echo" : "fable", (index + 1).toString())
})