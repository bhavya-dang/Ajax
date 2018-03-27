const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports.run = async(bot, message, args) => {
	const voiceChannel = message.member.voiceChannel;
	if(!voiceChannel) return message.channel.send("**You are currently not in any voice channel!**");
    
    if(!voiceChannel) return message.channel.send("**You are not in a voice channel!**");
	message.member.voiceChannel.leave();
  return;
}

module.exports.help = {
	name: "stop"
}