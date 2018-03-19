const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let Dembed = new Discord.RichEmbed()
  .setTitle("Define")
  .setDescription("**Usage:** t.define <word>")
  .setFooter("Tritax AI", bot.user.displayAvatarURL)
  .setColor("#42f4df");
   message.channel.send(Dembed);
}

module.exports.help = {
  name: "help.define"
}
