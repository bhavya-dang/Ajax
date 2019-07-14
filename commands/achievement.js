	const Discord = require("discord.js");
  const Idiot = require("idiotic-api");

	module.exports.run = async (bot, message, args) => {
  bot.API = new Idiot.Client("P4AVBjfHYZVTRFOXf0Le", { dev: true });
  let image = await bot.API.achievement(message.author.displayAvatarURL, args.length === 0 ? "You got something!" : args.join(" "));
  // await message.channel.send(new Discord.MessageAttachment(
  // await bot.API.wanted(message.author.displayAvatarURL), "wanted.png"));
  message.channel.send({ files: [{ attachment: image, name: 'achievement.jpg' }] })
	}

	module.exports.help = {
	name: "achievement"
  }