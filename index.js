const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ("b?");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix+'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
if (msg.content === prefix+'help') {
msg.channel.send('bot version 1.0 by MrBoom#4863');
}
});

client.on('message', msg => {
if (msg.content === prefix+'restart') {
if (message.author.id === '556160607339020315') {
channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login('NjQzMDQ5Mzg4NzY3MTgyODQ5.Xcf0aQ.gMllMX1waEivtAprlNME3q5YD5c'))
} else {
msg.channel.send('You not bot creator!');
}
}

client.login('NjQzMDQ5Mzg4NzY3MTgyODQ5.Xcf0aQ.gMllMX1waEivtAprlNME3q5YD5c');
