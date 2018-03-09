const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[2]) return message.reply("Please ask a full question")
  let replies = ["Yes", "No", "I was about to ask you", "Ask again"];
  
  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");
  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#42f453")
  .addField("Question", question)
  .addField("Answer", replies[result]);
  message.channel.send(ballembed)
}
module.exports.help = {
  name: "8ball"
}
