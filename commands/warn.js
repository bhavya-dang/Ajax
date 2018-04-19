const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  message.delete();

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("<:tickNo:432418492667396097> | You don't have `MANAGE_MEMBERS` permissions.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find the user.");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:tickNo:432418492667396097> | They can't be warnt!");
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
  if(!warnchannel) return message.channel.send("<:tickNo:432418492667396097> **| Couldn't find `mod-log` channel**");
  warnchannel.send(warnEmbed);
  message.channel.send("<:tickYes:432418492889694210> **| That user has been warnt.**");

  if(warns[wUser.id].warns == 5){
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole) return message.channel.send("<:tickNo:432418492667396097> **| Please create a role names `Muted`.");

    let mutetime = "30m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<:tickYes:432418492889694210> | ${wUser} has been muted for 30m due to 5 warnings.`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.channel.send(`<:tickYes:432418492889694210> | ${wUser} has been unmuted.`)
    }, ms(mutetime))
  }
  if(warns[wUser.id].warns == 10){
    wUser.ban(reason);
    message.channel.send(`${wUser} has been banned due to 7 warnings.`)
  }

}

module.exports.help = {
  name: "warn"
}
