const exec = require('child_process').exec;

module.exports.run = async(bot, message, args, level) => {
    if (message.author.id !== "414111663076147201") return message.channel.send("Only owners can use this command")
    exec(`${args.join(' ')}`, (error, stdout) => {
      const response = (error || stdout);
      message.channel.send(`Ran: ${args.join(" ")}\n${response}`, {code: "asciidoc", split: "\n"}).catch(console.error);
    });
}
module.exports.help = {
name: "exec"
}