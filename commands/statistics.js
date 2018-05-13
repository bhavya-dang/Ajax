const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("<:TAstats:444855091501989888> Statistics")
.addField("`" + message.prefix +"stats`", "Provides bot's statistics.")
.addField("`" + message.prefix +"userstats`", "Provide user statistics")
.addField("`" + message.prefix +"serverstats`", "Provide server statistics.")


message.channel.send(embed);
}

module.exports.help = {
  name: "statistics"
}

