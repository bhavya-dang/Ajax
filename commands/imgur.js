const Discord = require("discord.js");
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {

  const query = args.slice(0).join(' ')
  const noRes = args.slice(0).join(' ')
  if(!query) return message.channel.send(`For this command to work, you need to put something to search.`)
  
  const { body } = await snekfetch
				.get(`https://api.imgur.com/3/gallery/search/?q=${query}`)
				.set({ Authorization: `Client-ID ${process.env.IMGUR}` });
const images = body.data.filter(image => image.images && (message.channel.nsfw ? true : !image.nsfw));
			if (!images.length) return message.channel.send('No Result found for:' + ` **${noRes}**`);
			
  return message.channel.send({embed: new Discord.RichEmbed()
                               .setImage(images[Math.floor(Math.random() * images.length)].images[0].link)
                               .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`)
                               
                               .setTimestamp(new Date())
                              })
  
}


module.exports.help = {
  name: "imgur"
}
