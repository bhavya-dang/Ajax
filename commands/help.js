const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("Categories")
    .setAuthor("70 Commands", bot.user.displayAvatarURL)
    .addField("Moderation", "`t!mod`", true)
    .addField("Economy", "`t!eco`", true)
    .addField("Games", "`t!games`", true)
    .addField("Anime", "`t!animecmds`", true)
    .addField("Music", "`t!music`", true)
    .addField("Core Commands", "`t!core`", true)
    .addField("Utils", "`t!utils`", true)
    .addField("Fun", "`t!fun`", true)
    .addField("Statistics", "`t!statistics`", true)
    .addField("Developer", "`t!dev`", true)
    message.channel.send(embed);
}
module.exports.help = {
    name: "help"
}
