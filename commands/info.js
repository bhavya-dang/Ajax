const superagent = require('superagent');
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
  let embed = new Discord.RichEmbed()
  .setTitle("Booting")
  .setColor("#e0d318")
  .addField("Intro", "Hello! I am Tritax AI created by Tritax#2924.")
  .addField("Commands", "I have a total of 49 commands varied in Leveling, Miscelleneous, Coins, Fun/Games, Utility and many more fields.\nYou can do `t.help` to see my available commands and `t.commands` to get their info.")
  .setFooter("Tritax AI", bot.user.displayAvatarURL)
  message.channel.send(embed)
}

module.exports.help = {
  name: "info"
}

