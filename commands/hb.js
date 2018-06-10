const hastebin = require('hastebin-gen');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
let code = args.join(" ")
try {
  hastebin(code, "js").then(r => {
    message.channel.send(r); 
})
}catch(e){
message.channel.send("Encountered an error with the api. Please try again later.")
}
}
module.exports.help = {
name: "hb"
}
