const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let GameTypes = ["WATCHING", "PLAYING", "LISTENING"];
  let GameType = args[0];
  let GameName = args.slice(1).join(' ');
  if(!GameType || GameTypes.includes(args[0])) return message.reply("Please specify a game type!");
  if(!GameName) return message.reply("Please specify a game name!");
  bot.user.setActivity(GameName, {type: GameType});
}
module.exports.help = {
  name: "setgame"
}
