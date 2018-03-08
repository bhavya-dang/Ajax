const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const deleteCount = parseInt(args[0], 10);
  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
  return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
  const fetched = await message.channel.fetchMessages({count: deleteCount});
  message.channel.bulkDelete(fetched)
  .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  return message.channel.send('```Cleared messages```');
  message.delete();
}

module.exports.help = {
  name: "clear"
}
