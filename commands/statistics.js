const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("Statistics")
.setDescription("There are currently 3 commands in this category.")
.addField("`" + message.prefix +"stats`", "Provides bot's statistics.")
.addField("`" + message.prefix +"userstats`", "Provide user statistics")
.addField("`" + message.prefix +"serverstats`", "Provide server statistics.")


message.channel.send(embed);
}

module.exports.help = {
  name: "statistics"
}

