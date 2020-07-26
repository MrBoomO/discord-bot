const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity("with depression", {
  type: "PLAYING",
  url: "!help"
});
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjQzMDQ5Mzg4NzY3MTgyODQ5.Xcf0aQ.gMllMX1waEivtAprlNME3q5YD5c');
