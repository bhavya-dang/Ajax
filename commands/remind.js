const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

      let reminderTime = args[0];
      if(!reminderTime) return message.channel.send("**Specify a time for me to remind you. Usage: `t!remind 15min | Code**");

      let reminder = args.slice(1).join(" ");

      let remindEmbed = new Discord.RichEmbed()
      .setColor('#ffffff')
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
      .addField("Reminder", `\`\`\`${reminder}\`\`\``)
      .addField("Time", `\`\`\`${reminderTime}\`\`\``)
      .setTimestamp();

      message.channel.send(remindEmbed);


      setTimeout(function(){
        let remindEmbed = new Discord.RichEmbed()
        .setColor('#ffffff')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField("Reminder", `\`\`\`${reminder}\`\`\``)
        .setTimestamp()

        message.channel.send(remindEmbed);
      }, ms(reminderTime));


    }

    module.exports.help = {
      name: "remind"
    }