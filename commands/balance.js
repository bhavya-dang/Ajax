const Discord = require('discord.js')
const economy = require('discord-eco')

module.exports.run = async (bot, message, args) => {
  economy.fetchBalance(message.author.id).then((i) => {
  	let embed = new Discord.RichEmbed()
  	.setTitle(`${message.guild.name} Bank`)
  	.addField('Account Holder', message.author.username, true)
  	.addField('Account Balance', i.money, true)
  	.setColor('#a5ff1e')
    message.channel.send(embed)
  })
}
module.exports.help = {
  name: 'money'
}
