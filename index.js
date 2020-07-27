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
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setURL('https://mrboomoff.gamejolt.io/')
	.setAuthor('Commands list', 'https://mrboomoff.gamejolt.io')
	.setDescription('Here all commands of bot')
	.addFields(
		{ name: 'b?ping', value: 'Check if bot alive' },
		{ name: 'b?help', value: 'Show all bot commands' },
		{ name: 'b?server', value: 'Show server info' },
		{ name: 'b?user', value: 'Show user info' },
	)
	.setFooter('Bot by MrBoom#4863', 'https://github.com/MrBoomO/discord-bot/raw/master/img/lggw43axm1641.png');

msg.channel.send(exampleEmbed);
}
});

client.login(process.env.TOKEN);
