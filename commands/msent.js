const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
let member = message.mentions.users.first() || message.author;
let messagesSent = await  db.fetch(`messagesSent_${member.id}`)
console.log(messagesSent);
    const embed = new Discord.RichEmbed()
      .setColor(0xe8175d)
      .setTitle("Messages Sent")
      .setDescription(`**${member.tag} has sent ** \`${messagesSent}\` messages so far.`);
    message.channel.send(embed);



}
module.exports.help = {
name: "msent"
}