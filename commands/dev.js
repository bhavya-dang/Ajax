const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("<:TAdev:444855091443531782> Developer")
.addField("`" + message.prefix +"eval`", "Execute a JavaScript string.")
.addField("`" + message.prefix +"restart`","Restart the bot")
.addField("`" + message.prefix +"reload`","Reload all commands.")
.addField("`" + message.prefix +"exec`", "Execute command prompt cmds on localhost.")

message.channel.send(embed);
}

module.exports.help = {
  name: "dev"
}