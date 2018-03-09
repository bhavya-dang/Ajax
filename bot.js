const Discord = require("discord.js");
const superagent = require('superagent');
const bot = new Discord.Client({disableEveryone: true});
const profanities = require('profanities');
const fs = require("fs");
const xp = require("./xp.json")
bot.commands = new Discord.Collection();

//cmd handler
fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on('ready', () => {
  console.log("Loading...");
  setTimeout(function(){
    console.log("Bot has been loaded completely.");
  }, 1000);
  setTimeout(function(){
    console.log(`Logged in as ${bot.user.tag}`);
  }, 2000);
  setTimeout(function(){
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers`);
}, 2500);

})

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

   const prefix = '!';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
  
  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);
  if(!xp[message.author.id]){
     xp[message.author.id] = {
     xp: 0,
     level: 1
     };
  }
  
  
  let curlvl = xp[message.author.id].level;
  let curxp = xp[message.author.id].xp;
  
  let nxtlvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp = curxp + xpAdd;
  if(nxtlvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    
    }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) =>{
      if(err) console.log(err)
  });

  //profanity
  for (x = 0; x < profanities.length; x++){
    if(message.content.toUpperCase() == profanities[x].toUpperCase()){
      message.channel.send("Hey that word is not allowed!")
      message.delete();
      return;
    }
  }

});
bot.login(botconfig.token);
