const Discord = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports.run = async(bot, message, args) => {
  if(!message.channel.nsfw) {return message.channel.send(`:underage: **This channel is not marked as NSFW!** :angry: `)}
  else{
  randomPuppy('ass')
            .then(url => {
                const embed = new Discord.RichEmbed()
                
                .setTitle(`Ass`)
                .setFooter(`Requested by ${message.author.tag}`)
                .setImage(url)
                .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`)
    return message.channel.send({ embed });
            })
  }
}
module.exports.help = {
	name: "ass"
}