const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Music")
    .setDescription("There are currently 8 commands in this category.")
    .addField("`t!play`", "Play url or search a video on youtube.")
    .addField("`t!np`", "Shows what is playing right now.")
    .addField("`t!stop`", "Stop the currently playing song.")
    .addField("`t!queue`", "Shows the queue.")
    .addField("`t!skip`", "Skips the currently playing song.")
    .addField("`t!volume`", "Set the volume of the song.")
    .addField("`t!resume`", "Resume the paused song.")

message.channel.send(embed);
}

module.exports.help = {
  name: "music"
}
