const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("NSFW")
.setDescription("There are currently 5 commands in this category.")
.addField("`" + message.prefix +"hentai`", "Get random hentai image.")
.addField("`" + message.prefix +"ecchi`", "Get random ecchi image.")
.addField("`" + message.prefix +"neko`", "Get random neko image.")
.addField("`" + message.prefix +"boobs`", "Get random boobs image.")
.addField("`" + message.prefix +"ass`", "Get random ass image.")


message.channel.send(embed);
}

module.exports.help = {
  name: "nsfw"
}

