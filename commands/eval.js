const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== '414111663076147201') return;
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
  
  
  let embed = new Discord.RichEmbed()
      .setTitle(`Evaluated in ${Math.round(bot.ping)}ms`)
      .addField(":inbox_tray: Input", `\`\`\`xl\n${code}\n\`\`\``)
      .addField(":outbox_tray: Output", `\`\`\`xl\n${clean(evaled).replace(bot.token, "NO TOKEN FOR YOU!")}\n\`\`\``)
      .setColor('GREEN');
      message.channel.send({embed});
    } catch (err) {
      
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}

module.exports.help = {
  name: "eval"
}
