const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let reloadembed = new Discord.RichEmbed()
  .setTitle("Reloading...")
  .setColor("#42f453")
  .setDescription("Reloading Done! All cache released!")
  message.channel.send(reloadembed);

}

module.exports.help = {
  name: "reload"
}




