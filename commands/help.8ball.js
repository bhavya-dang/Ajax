const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let bembed = new Discord.RichEmbed()
  .setTitle("8ball")
  .setDescription("Randomly answers a question\n**Usage:** !8ball <question>")
  .setFooter("Tritax AI", bot.user.displayAvatarURL)
  .setColor("#42f4df");
   message.channel.send(bembed);
}

module.exports.help = {
  name: "help.8ball"
}
