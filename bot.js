const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const superagent = require('superagent');
const bot = new Discord.Client({disableEveryone: true});
const profanities = require('profanities');
const fs = require("fs");
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

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  //profanity
  for (x = 0; x< profanities.length; x++){
    if(message.content.toUpperCase() == profanities[x].toUpperCase()){
      message.channel.send("Hey that word is not allowed!")
      message.delete();
      return;
    }
  }

});
bot.login(botconfig.token);
