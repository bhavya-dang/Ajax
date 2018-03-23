const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let pEmbed = new Discord.RichEmbed()
        .setColor('#92f785')
        .setTitle(':ping_pong: Pong!')
        .addField('Latency', (new Date().getTime() - message.createdTimestamp) + ' ms', true)
        .addField('Websocket' , `${Math.round(bot.ping)}ms`, false);
         message.channel.send(pEmbed);
}


module.exports.help = {
  name: "ping"
}
