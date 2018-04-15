const Discord = require('discord.js'),
      db = require('quick.db');

exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let balance = await db.fetch(`userBalance_${user.id}`);
    const embed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name} Bank`)
    .setColor('#4AFF5F')
    .addField('Acoount Holder', user.username, true)
    .addField('Account Balance', `${balance === null ? "0" : balance}`, true)
    message.channel.send(embed)
}
module.exports.help = {
    name: "balance"
}
