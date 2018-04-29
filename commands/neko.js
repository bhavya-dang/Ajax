const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async(bot, message, args) => {
  superagent.get("https://nekos.life/api/neko", (err, res) => {
        if (err) { return console.log(`An error Occured while running neko command. Ran by ${message.author.tag}.\nError: ${err}`)}
    if(!message.channel.nsfw) {return message.channel.send(`:underage: **This channel is not marked as NSFW!** :angry: `)}
    else{
        message.channel.send("", { embed: new Discord.RichEmbed()
                                  .setTitle("Neko NSFW")
                                  .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`)
                                  .setImage(res.body.neko)
                                  .setFooter(`Requested by ${message.author.tag}`)
                                 })
    }
    })
}
module.exports.help = {
	name: "neko"
}