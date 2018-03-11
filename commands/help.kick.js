const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let kickembed = new Discord.RichEmbed()
  .setTitle("Kick")
  .setDescription("**Usage:** !kick <member tag> reason")
  .setFooter("Tritax AI", bot.user.displayAvatarURL)
  .setColor("#42f4df");
   message.channel.send(kickembed);
}

module.exports.help = {
  name: "help.kick"
}
