const { exec } = require("child_process");

module.exports.run = async (bot, message, args) => {
const outputErr = (message, stdData) => {
  let { stdout, stderr } = stdData;
  stderr = stderr ? ["`STDERR`","```sh",bot.clean(stderr.substring(0, 800)) || " ","```"] : [];
  stdout = stdout ? ["`STDOUT`","```sh",bot.clean(stdout.substring(0, stderr ? stderr.length : 2046 - 40)) || " ","```"] : [];
  let message = stdout.concat(stderr).join("\n").substring(0, 2000);
  message.edit(message);
};
const doExec = (cmd, opts = {}) => {
  return new Promise((resolve, reject) => {
    exec(cmd, opts, (err, stdout, stderr) => {
      if (err) return reject({ stdout, stderr });
      resolve(stdout);
    });
  });
};
  const command = args.join(" ");
  const outMessage = await message.channel.send(`Running \`${command}\`...`);
  let stdOut = await doExec(command).catch(data=> outputErr(outMessage, data));
  stdOut = stdOut.substring(0, 1750);
  outMessage.edit(`\`OUTPUT\`
\`\`\`sh
${bot.clean(stdOut)}
\`\`\``);
}
module.exports.help = {
name: "exec"
}




