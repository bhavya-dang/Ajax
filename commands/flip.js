	const Discord = require("discord.js");
	const db = require('quick.db');

	module.exports.run = async (bot, message, args) => {
	if(!args[0]) return message.channel.send("**Please specify an amount!**")
	if(isNaN(args[0])) return message.channel.send("**Please specify a valid number.**")
	if (args[0] < 0) return message.channel.send("**You can\'t gamble negative money!**");
	let balance = await db.fetch(`userBalance_${message.author.id}`);
	if(args[0] > 2000) return message.channel.send("**You can't gamble money more than $2000**")
	if (balance < args[0]) return message.reply('**You dont have that much money!**');



	var resultflip = Math.floor((Math.random() * 2) + 1);
	if (resultflip == 1) {
	db.add(`userBalance_${message.author.id}`, args[0]);
	const embedheads = new Discord.RichEmbed()
	.setTitle("Coinflip")
	.setColor("#F8A61C")
	.setDescription(`The coin landed on heads and you won $${args[0]}`);
	message.channel.send(embedheads);
	} else if (resultflip == 2) {

	db.add(`userBalance_${message.author.id}`, -args[0]);
	const embedtails = new Discord.RichEmbed()
	.setTitle("Coinflip")
	.setColor("#F8A61C")
	.setDescription(`The coin landed on tails and you lost $${args[0]}`);
	message.channel.send(embedtails);
	}
	}

	module.exports.help = {
	name: "flip"
  }