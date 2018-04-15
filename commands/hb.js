const hastebin = require('hastebin-gen');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
let code = args.join(" ")
hastebin(code, "js").then(r => {
    message.channel.send(r); //https://hastebin.com/someurl.js
}).catch(console.error);
}
module.exports.help = {
name: "hb"
}
