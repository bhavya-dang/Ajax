const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  message.delete();

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No can do pal!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find them yo");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They waaaay too kewl");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("Warn")
  .setColor("#fc6400")
  .addField("User", `<@${wUser.id}>`)
  .addField("Moderator", `${message.author}`)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "mod-log");
  if(!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(warnEmbed).then(msg => msg.channel.send(":tickYes | That user has been warnt."))

  if(warns[wUser.id].warns == 5){
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole) return message.reply("Please create a role names `Muted`.");

    let mutetime = "30m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`:tickYes: | ${wUser} has been muted for 30m due to 5 warnings.`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`${wUser} has been unmuted.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 7){
    wUser.ban(reason);
    message.reply(`${wUser} has been banned due to 7 warnings..`)
  }

}

module.exports.help = {
  name: "warn"
}
