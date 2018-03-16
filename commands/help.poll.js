const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let pollembed = new Discord.RichEmbed()
  .setTitle("Poll")
  .setDescription("**Usage:** !poll <question>")
  .setFooter("Tritax AI", bot.user.displayAvatarURL)
  .setColor("#42f4df");
   message.channel.send(pollembed);
}

module.exports.help = {
  name: "help poll"
}
