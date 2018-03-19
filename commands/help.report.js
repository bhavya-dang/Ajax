const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let rembed = new Discord.RichEmbed()
  .setTitle("Reports")
  .setDescription("**Usage:** t.report <member tag> reason\nIt will be send in #mod-log")
  .setFooter("Tritax AI", bot.user.displayAvatarURL)
  .setColor("#42f4df");
   message.channel.send(rembed);
}

module.exports.help = {
  name: "help.report"
}
