	const Discord = require("discord.js");
	const botconfig = require("./botconfig.json");
	const fs = require("fs");
	let bot = new Discord.Client();
	bot.commands = new Discord.Collection();
	const coins = require("./coins.json");
	const xp = require("./xp.json");
	const db = require('quick.db');
        const DBL = require("dblapi.js");
        const dbl = new DBL(process.env.DBL_TOKEN, bot);

	bot.on('ready', () => {
	console.log("Loading...");
	setTimeout(function(){
	console.log("Bot has been loaded completely.");
	}, 1000);
	function botStatus() {
        let status = [
            `My Default Prefix ${botconfig.prefix}.`,
            `in ${bot.guilds.size} guilds.`,
            `in ACH.`,
            `with my dev Tritax#2924`,
            `with ${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users.`
        ];
        let rstatus = Math.floor(Math.random() * status.length);

        bot.user.setActivity(status[rstatus], {Type: 'STREAMING'});        // BOT STATUS
      }; setInterval(botStatus, 20000)
        setInterval(() => {
        dbl.postStats(bot.guilds.size)
        }, 1800000);
	})

	fs.readdir("./commands/", (err, files) => {
    console.log(`Loaded ${files.length} commands.`)
	if(err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js");
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

	bot.on("message", async message => {
      let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
	
    let prefix = prefixes[message.guild.id].prefixes;
	if(message.author.bot) return undefined;
	if(message.channel.type === 'dm') return ;
        if(message.content.toLowerCase() === '<@421925809532436481>'){
        let embed = new Discord.RichEmbed()
       .setTitle("Tritax AI")
       .addField("Prefix", `\`${prefix}\``, true)
       .addField("Help", `\`${prefix}help\``, true)
       .setThumbnail(bot.user.displayAvatarURL)
       .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`);
        message.channel.send(embed);
        }

	let args = message.content.slice(prefix.length).trim().split(" ");
	let cmd = args.shift().toLowerCase();
	if(message.author.bot) return undefined;
	if(!message.content.startsWith(prefix)) return undefined;
   message.prefix = prefix;


	try {
	let commandFile = require(`./commands/${cmd}.js`);
	commandFile.run(bot, message, args);
	if(!commandFile) return message.channel.send("No command found with that name.");
	} catch (e) { console.log(e) }

	if(!coins[message.author.id]){
	coins[message.author.id] = {
	coins: 0
	};
	}

	let coinAmt = Math.floor(Math.random() * 15) + 14;
	let baseAmt = Math.floor(Math.random() * 15) + 14;
 

	

	if(coinAmt === baseAmt){
	coins[message.author.id] = {
	coins: coins[message.author.id].coins + coinAmt
	};
	fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
	if (err) console.log(err)
	});

	}

	let xpAdd = Math.floor(Math.random() * 15) + 14;
	

	if(!xp[message.author.id]){
	xp[message.author.id] = {
	xp: 0,
	level: 1
	};
	}


	let curxp = xp[message.author.id].xp;
	let curlvl = xp[message.author.id].level;
	let nxtLvl = xp[message.author.id].level * 300;
	xp[message.author.id].xp =  curxp + xpAdd;
	if(nxtLvl <= xp[message.author.id].xp){
	xp[message.author.id].level = curlvl + 1;

	}
	fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
	if(err) console.log(err)
	});


	});
	bot.on('guildMemberAdd', member => {
    bot.channels.get('439792255365021696').setName(`Total Users: ${member.guild.memberCount}`)
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    bot.channels.get('439793088001736725').setName(`Member Count: ${humans}`)
    let bots = member.guild.members.filter(m => m.user.bot).size;
    bot.channels.get('439793716052623361').setName(`Bot Count: ${bots}`)
	const members = member.guild.memberCount;
	const channel = member.guild.channels.find('name', 'member-log');
	if (!channel) return;
	
       let Role = member.guild.roles.find(`name`, "Bots");
       if(member.user.bot){
	member.addRole(Role.id)
       }else{
      let role = member.guild.roles.find(`name`, "User");
	member.addRole(role.id)
       }
 
	let Embed = new Discord.RichEmbed()
	.setFooter(`User Joined | Members- ${member.guild.memberCount}`)
	.setColor("#cde246")    
	.setAuthor(`${member.displayName} has joined ${member.guild.name}`, member.user.displayAvatarURL)
	.setTimestamp()
	channel.send(Embed);
	});
	bot.on('guildMemberRemove', member => {
    bot.channels.get('439792255365021696').setName(`Total Users: ${member.guild.memberCount}`)
    let humans = member.guild.members.filter(m => !m.user.bot).size;
    bot.channels.get('439793088001736725').setName(`Member Count: ${humans}`)
    let bots = member.guild.members.filter(m => m.user.bot).size;
    bot.channels.get('439793716052623361').setName(`Bot Count: ${bots}`)
	const channel = member.guild.channels.find(`name`, 'member-log');
	if(!channel) return; 
	let Embed = new Discord.RichEmbed()
	.setColor("#e26346")
	.setAuthor(`${member.displayName}, has left ${member.guild.name}.`, member.user.displayAvatarURL)
	.setTimestamp()
	.setFooter(`User Left | Members- ${member.guild.memberCount}`)
	channel.send(Embed);
	});

	bot.on('guildCreate', guild => {
	      let channel = bot.channels.get("428564028239904790")
        const embed = new Discord.RichEmbed()
        .setColor("#cde246")
        .setAuthor(`Joined ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Owner", guild.owner.user.tag)
        .addField("ID", guild.id, true)
        .addField("Users", guild.memberCount, true)
        .addField("Channels", guild.channels.size, true)
         channel.send(embed);
	});
	bot.on('guildDelete', guild => {
	      let channel = bot.channels.get("428564028239904790")
        const embed = new Discord.RichEmbed()
        .setColor("#cde246")
        .setAuthor(`Left ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Owner", guild.owner.user.tag)
        .addField("ID", guild.id, true)
        .addField("Users", guild.memberCount, true)
        .addField("Channels", guild.channels.size, true)
         channel.send(embed);
	});
	bot.login(process.env.TOKEN);
