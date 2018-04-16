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
    .addField("<:dnd:435059612039905311> DND", dnd)
    .addField("<:idle:435059611779989525> Idle", idle)
    .addField("<:offline:435059612048162816> Offline", offline)
    .addField("<:online:435059612052357120> Online", online);
    message.channel.send(embed);

}
module.exports.help = {
    name: "mstats"
}
