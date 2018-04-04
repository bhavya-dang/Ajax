const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  if (!message.mentions.members.first()) return message.channel.send('**Please mention a user!**')

  let targetMember = message.mentions.members.first(),
    amount = parseInt(args.join(' ').replace(targetMember, ''))

  if (isNaN(amount)) return message.channel.send('**Please define an amount!**')

  let targetBalance = await db.fetch(`userBalance_${targetMember.id}`),
    selfBalance = await db.fetch(`userBalance_${message.author.id}`),
    startBalance = 0 // Starting Balance

  if (targetBalance === null) targetBalance = startBalance
  if (selfBalance === null) selfBalance = startBalance

  if (amount > selfBalance) return message.channel.send('**Sorry you don\'t have enough money.**')

  db.add(`userBalance_${targetMember.id}`, amount)
  db.subtract(`userBalance_${message.author.id}`, amount)

 message.channel.send(`**Successfully given $${amount} to ${targetMember.user.username}!**`)
}
module.exports.help = {
  name: "pay"
}
