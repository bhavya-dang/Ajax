const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("<:TAstats:444855091501989888> Utilities")
.addField("`" + message.prefix +"ascii`", "Generate ascii text.")
.addField("`" + message.prefix +"auto`","Auto-complete a username.")
.addField("`" + message.prefix + "avatar`", "Generate avatar of a member.")
.addField("`" + message.prefix +"define`", "Define a given term.")
.addField("`" + message.prefix +"encrypt`", "Encrypt an arguement.")
.addField("`" + message.prefix + "decrypt`", "Decrypt an encrypted arguement.")
.addField("`" + message.prefix +"find`", "Find usernames with a given term.")
.addField("`" + message.prefix + "imgur`", "Get an imgur image based on the search term.")
.addField("`" + message.prefix +"hb`", "Hastebin your code")
.addField("`" + message.prefix +"google`", "Google a term.")
.addField("`" + message.prefix +"tranlate`", "Tranlate a term.")
.addField("`" + message.prefix +"remind`", "You know what it is.")
.addField("`" + message.prefix +"npm`", "Provide information on a npm package.")
.addField("`" + message.prefix +"randomdefine`", "Give definition of a random word.")
.addField("`" + message.prefix + "ping`", "Give latency and discord heartbeat.")
.addField("`" + message.prefix +"shorten`", "Shorten a url.")
.addField("`" + message.prefix +"svs`", "Show the servers that the bot's in.")
.addField("`" + message.prefix +"weather`", "Provide weather information of a region.")

message.channel.send(embed);
}

module.exports.help = {
  name: "utils"
}
