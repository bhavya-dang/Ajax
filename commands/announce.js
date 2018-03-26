const send = require('quick.hook');
const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {

let split = '&&';
if(!args[0]){

	const embed = new Discord.RichEmbed()
	.setColor(0x77B3D5)
	.setTitle("Information")
	.setDescription(`**Usage: \`\`\`t.announce embedTitle ${split} embedMsg ${split} msgName ${split} msgIcon ${split} embedColor\`\`\`**`)
	return send(message.channel, embed, {
		name: 'Announce Command',
		icon: 'https://cdn.discordapp.com/attachments/423906508204408892/427446362318045185/avatar.jpg'

	})
}
args = args.join(' ').split(split);
for (var i = 0; i < args.length; i++) args[i] = args[i].trim();

	if(args[4]) args[4] = parseInt(`0x${args[4]}`);

let options = {
   title: args[0] || 'Announcement',
   message: args[1] || undefined,
   name: args[2] || 'A Coder\'s Hangout',
   icon: args[3] || 'https://i.imgur.com/X9eAmHm.png',
   embedColor: args[4] || 0xffffff

}
const embed = new Discord.RichEmbed()
.setColor(options.embedColor)
.setTitle(options.title)
if(options.message) embed.setDescription(options.message);
send(message.channel, embed, {
name: options.name,
icon: options.icon
})

}
module.exports.help = {
	name: "announce"
}


