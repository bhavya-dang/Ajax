const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let banembed = new Discord.RichEmbed()
  .setTitle("Ban")
  .setDescription("**Usage:** t.ban <member tag> reason")
  .setFooter("Tritax AI", bot.user.displayAvatarURL)
  .setColor("#42f4df");
   message.channel.send(banembed);
}

module.exports.help = {
  name: "help.ban"
}
