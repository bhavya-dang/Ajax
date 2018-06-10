const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Developer", "`TritaxXx#2924`")
    .addField("Library", "`discord.js@11.3.2`")
    .addField("Honorable Mentions", "`X̷edu#4945` Help and Support\n`Respire#9313` New Command Ideas\n`Cubz#2954` Website Administrator")
    .addField("Links", `[\`Website\`](https://ajax-site.glitch.me/loader.html)\n[\`DBL Bot\`](https://discordbots.org/bot/421925809532436481)\n[\`Discord\`](https://discord.gg/ka89e7X)`)
    .setColor("#e2df1b")
    .setFooter("A Coder's Hangout")
    .setTimestamp()
    message.channel.send(embed);
}
module.exports.help = {
    name: "info"
}