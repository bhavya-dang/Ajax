const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Core")
    .setDescription("There are currently 2 commands in this category.")
    .addField("`" + message.prefix +"help`", "Provides a list of available commands.")
    .addField("`" + message.prefix +"info`", "Provide information about the bot.")
    .addField("`" + message.prefix +"bugreport`", "Report a bug.")
    .addField("`" + message.prefix +"prefix`", "Change bot prefix.`[Default is 1t!]`")
    
    message.channel.send(embed)
}
module.exports.help = {
    name: "core"
}