const exec = require('child_process').exec;
const Discord = require('discord.js');

module.exports.run = async(bot, message, args, level) => {
    let embed = new Discord.RichEmbed()
  .setTitle("Evaluation")
  .setDescription("Sorry, the `eval` command can only be executed by the Developer.")
  .setColor("#cdf785");
  if(message.author.id !== '414111663076147201') return message.channel.send(embed);
    exec(`${args.join(' ')}`, (error, stdout) => {
      const response = (error || stdout);
      let embed = new Discord.RichEmbed()
      .setTitle(`Executed in ${Math.round(bot.ping)}ms`)
      .addField(":inbox_tray: Input", `\`\`\`asciidoc\n${args.join(" ")}\n\`\`\``)
      .addField(":outbox_tray: Output", `\`\`\`js\n${response}\n\`\`\``)
      .setColor('GREEN');
      message.channel.send({embed});
    });
}
module.exports.help = {
name: "exec"
}
