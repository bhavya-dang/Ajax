const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (bot, message, args) => {
 
 if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Sorry, you don\'t have permission to change server prefix').the(msg => msg.delete({timeout: 10000}));
  
  db.set(`prefix_${message.guild.id}`, args.join(' ')).then(i => {
    
  const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setTitle(`Server Prefix has been changed to ${i}`)
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor('RANDOM');
    message.channel.send({ embed });
  })

}
module.exports.help = {
name: "prefix"
}
