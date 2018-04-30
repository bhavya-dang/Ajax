const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("Utilities")
.setDescription("There are currently 4 commands in this category.")
.addField("`t!eval`", "Execute a JavaScript string.")
.addField("`t!restart`","Restart the bot")
.addField("`t!reload`","Reload all commands.")
.addField("`t!exec`", "Execute command prompt cmds on localhost.")

message.channel.send(embed);
}

module.exports.help = {
  name: "dev"
}