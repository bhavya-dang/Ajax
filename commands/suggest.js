const superagent = require('superagent');
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
let user = bot.users.get('414111663076147201')
let suggestion = args.join(" ").slice(22)
message.channel.send("Suggestion send!")
let embed = new Discord.RichEmbed()
.setTitle("Suggestion")
.addField("By", `${message.author}`)
.addField("Feedback", suggestion)
user.send(embed);
}


module.exports.help = {
  name: "add"
}

