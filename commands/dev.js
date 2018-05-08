const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("Utilities")
.setDescription("There are currently 4 commands in this category.")
.addField("`" + message.prefix +"eval`", "Execute a JavaScript string.")
.addField("`" + message.prefix +"restart`","Restart the bot")
.addField("`" + message.prefix +"reload`","Reload all commands.")
.addField("`" + message.prefix +"exec`", "Execute command prompt cmds on localhost.")

message.channel.send(embed);
}

module.exports.help = {
  name: "dev"
}