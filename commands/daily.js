const Discord = require("discord.js");
const db = require('quick.db');
const moment = require('moment');
require('moment-duration-format');


      
exports.run = async (bot, message, args) => {

let cooldown = 8.64e+7;
let amount = Math.floor(Math.random() * 1000) + 5000;
    
let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);

if (lastDaily != moment().format('L')) return message.channel.send(`**You already collected this! Your next reward will be available ${moment().endOf('day').fromNow()}**`);

  let embed = new Discord.RichEmbed()
  .setTitle("Daily")
  .setDescription(`**${message.member.tag} has claimed $${amount} from daily store!**`)
  .setTimestamp();
  message.channel.send(embed);

    db.set(`lastDaily_${message.author.id}`, moment().format('L'));
    db.add(`userBalance_${message.author.id}`, amount);
 }

module.exports.help = {
  name: "daily"
}
