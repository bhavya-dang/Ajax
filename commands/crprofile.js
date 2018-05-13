const cr = require('cr.js');
const Discord = require('discord.js');

let client = new cr.Client();
module.exports.run = async (bot, message, args) => {
client.getProfile(args[0]).then(player => {
let embed = new Discord.RichEmbed()
.setTitle("Player Clash Royale Stats")
.setThumbnail("https://camo.githubusercontent.com/f72720b129a5f3609e1d5803bb025c612c94f2ee/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3238353333332f73637265656e73686f74732f323630323538392f736869656c642e6a7067")
.addField("Tag", player.tag, true)
.addField("Name", player.name, true)
.addField("Arena", player.arena, true)
.addField("Trophies", player.trophies, true)
.addField("Wins", player.wins, true)
.addField("Losses", player.losses, true)
.addField("Level", player.level, true)
.addField("Global Rank", player.globalRank, true)
.addField("Clan", player.clanName, true)
message.channel.send(embed)

})
}
module.exports.help = {
name: "crprofile"
}
