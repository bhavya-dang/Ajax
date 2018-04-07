const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("Games")
    .setDescription("There are currently 2 commands in this category.")
    .addField("`t!fortnite`", "Check a user's fortnite stats!")
    .addField("`t!csgo`", "Check a user's cs:go stats!");
    message.channel.send(embed);
    
}
module.exports.help = {
    name: "games"
}