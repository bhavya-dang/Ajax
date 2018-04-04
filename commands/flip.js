	const Discord = require("discord.js");
	const db = require('quick.db');

	module.exports.run = async (bot, message, args) => {
    let amount = Number(args[0]);
	if(!amount) return message.channel.send("**Please specify an amount!**")
	if(isNaN(amount)) return message.channel.send("**Please specify a valid number.**")
	if (amount < 0) return message.channel.send("**You can\'t gamble negative money!**");
	let balance = await db.fetch(`userBalance_${message.author.id}`);
	if(amount > 2000) return message.channel.send("**You can't gamble money more than $2000**")
	if (balance < amount) return message.reply('**You dont have that much money!**');



	var resultflip = Math.floor((Math.random() * 2) + 1);
	if (resultflip == 1) {
	db.add(`userBalance_${message.author.id}`, amount)
	const embedheads = new Discord.RichEmbed()
	.setTitle("Coinflip")
	.setColor("#F8A61C")
	.setDescription(`The coin landed on heads and you won $${amount}`);
	message.channel.send(embedheads);
	} else if (resultflip == 2) {

	db.subtract(`userBalance_${message.author.id}`, amount);
	const embedtails = new Discord.RichEmbed()
	.setTitle("Coinflip")
	.setColor("#F8A61C")
	.setDescription(`The coin landed on tails and you lost $${amount}`);
	message.channel.send(embedtails);
	}
	}

	module.exports.help = {
	name: "flip"
  }