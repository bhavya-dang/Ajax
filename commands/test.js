const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let testembed = new Discord.RichEmbed()
  .setTitle("Testing...")
  .setColor("#42f453")
  .setDescription("Testing Done! Bot is online :sunglasses:")
  message.channel.send(testembed);
}

module.exports.help = {
  name: "test"
}
