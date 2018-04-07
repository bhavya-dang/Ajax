const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let members = message.guild.memberCount;
    let offline = message.guild.members.filter(i => i.presence.status == 'offline').size
    let idle = message.guild.members.filter(i => i.presence.status == 'idle').size
    let online = message.guild.members.filter(i => i.presence.status == 'online').size
    let dnd = message.guild.members.filter(i => i.presence.status == 'dnd').size
    let embed = new Discord.RichEmbed()
    .setTitle("Member Stats")
    .setColor("#f4c441")
    .addField("Members", members)
    .addField("DND", dnd)
    .addField("Idle", idle)
    .addField("Offline", offline)
    .addField("Online", online);
    message.channel.send(embed);

}
module.exports.help = {
    name: "mstats"
}