const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   if(!args) return message.reply("Must provide a command name to reload.");
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply(`The command ${args[0]} has been reloaded`);

}

module.exports.help = {
  name: "reload"
}