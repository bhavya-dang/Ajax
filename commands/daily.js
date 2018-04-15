const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (bot, message, args) => {
    let cooldown = 8.64e+7, // 24 Часа
        amount = Math.floor(Math.random() * 1000) + 4000;      

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));

        const embed = new Discord.RichEmbed()
        .setTitle('Daily')
        .setColor('#FFBA4A')
        .setDescription(`You already collected this, please wait **${timeObj.hours}h ${timeObj.minutes}m**!`)
        message.channel.send(embed);
        
    } else {
        const embed = new Discord.RichEmbed()
        .addField('Daily Collected', `You successfully collected $${amount}!`)
        .setColor('#59FF4A')
        message.channel.send(embed);

        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`userBalance_${message.author.id}`, amount);
    }
}
module.exports.help = {
    name: "daily"
}
