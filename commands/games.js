const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("Games")
    .setDescription("There are currently 1 command in this category.")
    .addField("`t!fortnite`", "Check a user's fortnite stats!");
    message.channel.send(embed);
    
}
module.exports.help = {
    name: "games"
}