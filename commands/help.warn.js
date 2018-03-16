const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let kickembed = new Discord.RichEmbed()
  .setTitle("Warn")
  .setDescription("**Usage:** !warn <member tag> reasonn\nIt will be send in #mod-log")
  .setFooter("Tritax AI", bot.user.displayAvatarURL)
  .setColor("#42f4df");
   message.channel.send(kickembed);
}

module.exports.help = {
  name: "help warn"
}
