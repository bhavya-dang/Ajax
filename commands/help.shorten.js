const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let bembed = new Discord.RichEmbed()
  .setTitle("Shorten")
  .setDescription("Shortens a URL\n**Usage:** t.shorten <URL> <title>")
  .setFooter("Tritax AI", bot.user.displayAvatarURL)
  .setColor("#42f4df");
   message.channel.send(bembed);
}

module.exports.help = {
  name: "help.shorten"
}
