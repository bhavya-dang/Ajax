const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("NSFW")
.setDescription("There are currently 5 commands in this category.")
.addField("`t!hentai`", "Get random hentai image.")
.addField("`t!ecchi`", "Get random ecchi image.")
.addField("`t!neko`", "Get random neko image.")
.addField("`t!boobs`", "Get random boobs image.")
.addField("`t!ass`", "Get random ass image.")


message.channel.send(embed);
}

module.exports.help = {
  name: "nsfw"
}

