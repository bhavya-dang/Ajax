// Host
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// Calling the Packages and Files
const Discord = require("discord.js");
const moment = require('moment');
const fs = require("fs");
let bot = new Discord.Client();
const prefix = "b@";
bot.commands = new Discord.Collection();

let cooldown = new Set();
let cdSeconds = 5;



// Ready event
bot.on('ready', () => {
console.log(`[${moment(new Date()).format("dddd, MMMM Do YYYY, HH:mm:ss")}] [${bot.user.username}]: System booting up...\n[${moment.utc(new Date()).format("dddd, MMMM Do YYYY, HH:mm:ss")}] [${bot.user.username}]: All commands loaded.\n[${moment.utc(new Date()).format("dddd, MMMM Do YYYY, HH:mm:ss")}] [${bot.user.username}]: 4 events ready.`);
setTimeout(() => {
console.log(`[${moment(new Date()).format("dddd, MMMM Do YYYY, HH:mm:ss")}] [${bot.user.username}]: Successfully booted.`)
}, 2000);


// Bot Status
function botStatus() {
  let status = [
    `my default prefix ${prefix}.`,
    `with DevSquad Team`,
    `with ${bot.users.size} users.`
  ];
  let rstatus = Math.floor(Math.random() * status.length);
  bot.user.setActivity(status[rstatus], {Type: 'STREAMING'});        
};
  setInterval(botStatus, 20000)
});
// Message event
bot.on("message", async message => {
	if(message.author.bot) return undefined;
  if(!message.content.startsWith(prefix)) return;
	if(message.channel.type === 'dm') return;
	let args = message.content.slice(prefix.length).trim().split(" ");
	let cmd = args.shift().toLowerCase();
  message.prefix = prefix;
  
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.channel.send(`**Please wait for ${cdSeconds} seconds! [RATELIMITED]**`);
  }
    
  if(!message.member.hasPermission("ADMINISTRATOR")){
  cooldown.add(message.author.id);
  }
  
  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdSeconds * 1000);
// Command Handler
try{
let commandFile = require(`./commands/${cmd}.js`);
commandFile.run(bot, message, args)
}catch(err){
console.log(`${err.stack}`)
}
console.log(`[${moment.utc(new Date()).format("dddd, MMMM Do YYYY, HH:mm:ss")}] [${message.author.tag}]: Command: "${cmd}" [${message.guild.name}]`);
});

// Member Join Event
	bot.on('guildMemberAdd', member => {   
    
	  const members = member.guild.memberCount;
	  const channel = member.guild.channels.find(c => c.name === "member-log");
	  if (!channel) return;

    let Role = member.guild.roles.find(`name`, "Bots");
    if(member.user.bot){
	    member.addRole(Role.id)
    }else{
      let role = member.guild.roles.find(r => r.name === "Member");
	    member.addRole(role.id)
    };
 
	  let Embed = new Discord.RichEmbed()
	  .setFooter(`User Joined | ${member.guild.memberCount} Members`)
	  .setColor("#cde246")    
	  .setAuthor(`${member.displayName} has joined ${member.guild.name}`, member.user.displayAvatarURL)
	  .setTimestamp()
	  channel.send(Embed);
	});

// Member Leave Event
	bot.on('guildMemberRemove', member => {
	  const channel = member.guild.channels.find(c => c.name === "member-log");
	  if(!channel) return; 
    
	  let Embed = new Discord.RichEmbed()
	  .setColor("#e26346")
	  .setAuthor(`${member.displayName}, has left ${member.guild.name}.`, member.user.displayAvatarURL)
	  .setTimestamp()
	  .setFooter(`User Left | ${member.guild.memberCount} Members`)
	  channel.send(Embed);
	});



// Beast Login:
	bot.login(process.env.TOKEN);