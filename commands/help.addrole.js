const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let aembed = new Discord.RichEmbed()
  .setTitle("Addrole")
  .setDescription("**Usage:** !addrole <member tag> role name")
  .setFooter("Tritax AI", bot.user.displayAvatarURL)
  .setColor("#42f4df");
   message.channel.send(aembed);
}

module.exports.help = {
  name: "help addrole"
}
