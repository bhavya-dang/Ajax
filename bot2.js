const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const superagent = require('superagent');
const bot = new Discord.Client({disableEveryone: true});
const TinyURL = require('tinyurl');
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
  //help
  if(cmd === `${prefix}help`){
    message.channel.send("No worries:anger: @Admin is on the way!!")
  }
  // hello
  if(cmd === `${prefix}hi`){
    return message.channel.send("Hey There!:grin:");
  }
  if(cmd === "fuck") {
    message.delete()
    message.channel.send('Word used not allowed.')
  }
//dm
if(cmd === `${prefix}dm`){
  let content = args.join(" ")
  return message.author.send(content);
}

  // doggo
  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setDescription('Doggo:dog:')
  .setColor('#9ed0ed')
  .setImage(body.url);
  if(cmd === `${prefix}doggo`)
  return message.channel.send(dogembed);

//commands
  if(cmd ===`${prefix}commands`){
  let commandEmbed = new Discord.RichEmbed()
  .setTitle("Commands")
  .setColor("#c5f4a6")
  .setFooter("The bot will send the !kick, !ban and !report embeds in the #reports channel")
  .addField("**!hi**", "Say hello!")
  .addField("**!dm**", "DM the author.")
  .addField("**!ping**", "Pong the author.")
  .addField("**!test**", "Test if the bot is online.")
  .addField("**!kick**", "**Usage:** !kick **<USER>** reason")
  .addField("**!bulkDelete**", "Delete the no. of messages specified.")
  .addField("**!ban**", "**Usage:** !ban **<USER>** reason")
  .addField("**!botinfo**", "Send the member Bot Information.")
  .addField("**!serverinfo**", "Send the member Server Information.")
  .addField("**!report**", "!report **<USER>** reason")
  .addField("**!doggo**", "Send a random Dog image.")
  .addField("**!docs**", "Send the member discord.js docs.");
   message.channel.send(commandEmbed);
   return;
 }

//docs
if(cmd === `${prefix}docs`){
  let dchannel = message.guild.channels.find(`name`, "discord-bot-help");
  let docsEmbed = new Discord.RichEmbed()
  .setTitle("Discord.Js Documentation")
  .setColor("#4298f4")
  .setDescription("You can find the latest Discord.js documentation below:arrow_down:")
  .addField("Discord.Js", "https://discordjs.readthedocs.io/en/latest/")
  .addField("Github", "https://github.com/discordjs/discord.js")
  .setFooter(`If still getting an error, feel free to ask the devs in #discord-bot-help😁`);
   return message.channel.send(docsEmbed);
}
  //kick
  if (cmd === `${prefix}kick`) {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#f45642")
    .addField("Kicked User", `${kUser}`)
    .addField("Kicked By", `<@${message.author}>`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "reports");
    if(!kickChannel) return message.channel.send("Can't find reports channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
    return;
  }
  //ban
  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#f45642")
    .addField("Banned User", `${bUser} `)
    .addField("Banned By", `<@${message.author.id}>`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Can't find reports channel.");

    message.guild.member(bUser).ban(bReason);
    reportschannel.send(banEmbed);
    return;
  }
  // report
  if(cmd === `${prefix}report`){

    let rUser = message.guild.member(message.mentions.users.first()  || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription ("Reports")
    .setColor("#f24646")
    .addField("Reported User", `${rUser}`)
    .addField("Reported By",`${message.author}`)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);
    let reportschannel = message.guild.channels.find(`name`, "reports");
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
    return;
  }
  //test
  if(cmd === `${prefix}test`){
    let testembed = new Discord.RichEmbed()
    .setTitle("Testing...")
    .setColor("#42f453")
    .setDescription("Testing Done! Bot is online :sunglasses:")
    message.channel.send(testembed);
  }
  //botinfo
  if(cmd === `${prefix}botinfo`){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#7fe81e")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created At", bot.user.createdAt)
    return message.channel.send(botembed);
  }
  //serverinfo
  if(cmd === `${prefix}serverinfo`){
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#e0d318")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created At", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);
    return message.channel.send(serverembed)
  }
  //Ping
  if(cmd === `${prefix}ping`){
    const m = await message.channel.send("Pong!");
    m.edit(`:ping_pong: Latency is ${m.createdTimestamp - message.createdTimestamp}ms.`)

  }
  //bulkdelete
  if(cmd === `${prefix}clear`) {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    return message.channel.send('```Cleared messages```');
    message.delete()
  }
});
bot.login(botconfig.token);
