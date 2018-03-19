const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let reembed = new Discord.RichEmbed()
  .setTitle("Removerole")
  .setDescription("**Usage:** t.removerole <member tag> role")
  .setFooter("Tritax AI", bot.user.displayAvatarURL)
  .setColor("#42f4df");
   message.channel.send(reembed);
}

module.exports.help = {
  name: "help.removerole"
}
