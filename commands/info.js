const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
 
   .setDescription("[Upvote my bot](https://discordbots.org/bot/421925809532436481)\n[Upvote my server](https://discordbots.org/servers/421853697027473408)\n[Website](https://tritaxxcoder.github.io/TritaxAI/index.html)\nHelp Command- `t!help`")
   message.channel.send(embed);
}
module.exports.help = {
    name: "info"
}