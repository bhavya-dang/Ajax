const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
  let Embed = new Discord.RichEmbed()
  .setTitle(message.author.username)
  .setColor('YELLOW')
  .setDescription("No bio set.")
  .setThumbnail(message.author.displayAvatarURL);
  message.channel.send(Embed);
}

module.exports.help = {
  name: "profile"
}

