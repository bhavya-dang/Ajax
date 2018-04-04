const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("Utilities")
.setDescription("There are currently 13 commands in this category.")
.addField("`t!ascii`", "Generate ascii text.")
.addField("`t!auto`","Auto-complete a username.")
.addField("`t!add`","Perform simple addition.")
.addField("`t!avatar`", "Generate avatar of a member.")
.addField("`t!define`", "Define a given term.")
.addField("`t!find`", "Find usernames with a given term.")
.addField("`t!imgur`", "Get an imgur image based on the search term.")
.addField("`t!google`", "Google a term.")
.addField("`t!npm`", "Provide information on a npm package.")
.addField("`t!randomdefine`", "Give definition of a random word.")
.addField("`t!ping`", "Give latency and discord heartbeat.")
.addField("`t!shorten`", "Shorten a url.")
.addField("`t!subtract`","Perform simple subtraction.")
.addField("`t!svs`", "Show the servers that the bot's in.")
.addField("`t!weather`", "Provide weather information of a region.")

message.channel.send(embed);
}

module.exports.help = {
  name: "utils"
}