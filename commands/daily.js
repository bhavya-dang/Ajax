const Discord = require("discord.js");
const db = require('quick.db');
const ms = require('parse-ms');


module.exports.run = async (bot, message, args) => {

let cooldown = 8.64e+7,
    amount = 250;
    
let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);

if(lastDaily !== null && cooldown - (Date.now() - lastDaily > 0)) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));
    
    message.channel.send(`You already collected this, please wait **${timeObj.hours}h ${timeObj.minutes}m**`);
 }else {
 
    message.channel.send(`Successfully collected $${amount}`);
    
    db.set(`lastDaily_${message.author.id}`, Date.now());
    db.add(`userBalance_${message.author.id}`, 250);
 }
}

module.exports.help = {
  name: "daily"
}
