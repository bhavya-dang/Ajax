const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let testembed = new Discord.RichEmbed()
  .setTitle("Testing...")
  .setColor("#42f453")
  .setDescription("If u see this message, & I know that you can, then the bot is obviously online :sunglasses:")
  message.channel.send(testembed);
}

module.exports.help = {
  name: "test"
}
