const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let channel = bot.channels.get("445069238676357120")
let embed = new Discord.RichEmbed()
.setTitle("Bug Report")
.setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
.addField("Bug", bug)
.addField("Reported By", user)
.addField("Reported in", guild)
.setColor("#f49542")

message.channel.send("<:tickYes:432418492889694210> **| Your bug has been reported in the official server. It will be reviewed so please be patient.**")
channel.send(embed).then(i => i.react("⏳"))

  


}
module.exports.help = {
name: "bugreport"
}