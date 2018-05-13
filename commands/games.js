const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("<:TAfun:444855091585875979> Games")
    .addField("`" + message.prefix + "fortnite`", "Check a user's fortnite stats!")
    .addField("`" + message.prefix +"csgo`", "Check a user's cs:go stats!");
    message.channel.send(embed);
    
}
module.exports.help = {
    name: "games"
}