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
      message.channel.send(`Ran: ${args.join(" ")}\n${response}`, {code: "asciidoc", split: "\n"}).catch(console.error);
    });
}
module.exports.help = {
name: "exec"
}