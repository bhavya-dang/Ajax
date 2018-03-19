const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let payembed = new Discord.RichEmbed()
  .setTitle("Pay")
  .setDescription("**Usage:** t.pay <member tag> amt. of coins")
  .setFooter("Tritax AI", bot.user.displayAvatarURL)
  .setColor("#42f4df");
   message.channel.send(payembed);
}

module.exports.help = {
  name: "help.pay"
}
