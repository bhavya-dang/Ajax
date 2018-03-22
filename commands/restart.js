const Discord = require('discord.js');

module.exports.run = async(bot, message, args) =>{
  if(message.author.id !== '414111663076147201') return;
message.channel.send("Restarting...").then(() => {
 process.exit();
});
                                           }
module.exports.help = {
name: "restart"
}
                                           