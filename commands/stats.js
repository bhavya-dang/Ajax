const fs = require('fs');
const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');


module.exports.run = (bot, message) => {

const uptime = moment.duration(bot.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
let ramUsage = (process.memoryUsage().rss / 1024 / 1024).toFixed(2);
let platform = process.platform;  
let cpuUsage = process.cpuUsage();
let bicon = bot.user.displayAvatarURL;  
let uptimeEmbed = new Discord.RichEmbed()
.setTitle('Uptime')
.setDescription(`Bot is online for ${uptime}!`)
.setThumbnail(bicon)
.addField('Users', bot.users.size, true)
.addField('Servers', bot.guilds.size, true)
.addField('Channels', bot.channels.size, true)
.addField('RAM usage', `${ramUsage} mb`, true)
.addField('CPU usage', Math.floor(cpuUsage.user/cpuUsage.system) + '%', true)
.addField('Developer', "Tritax#2924", true)
.addField("Discord.js", ` v${Discord.version}`, true)
.addField('Node', `${process.version}`, true)
.setTimestamp();
message.channel.send(uptimeEmbed);

}
module.exports.help = {
  name: "stats"
}