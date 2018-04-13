const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Core")
    .setDescription("There are currently 3 commands in this category.")
    .addField("`t!help`", "Providesa list of available commands.")
    .addField("`t!info`", "Provide information about the bot.")
    .addField("`t!suggest`", "Provide to my developer!.")
    
    message.channel.send(embed)
}
module.exports.help = {
    name: "core"
}