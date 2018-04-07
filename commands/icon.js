const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setTitle(message.member.tag + `Avatar Preview`)
  .setImage(message.member.displayAvatarURL)
  message.channel.send(embed)
}

module.exports.help = {
  name: "icon"
}
