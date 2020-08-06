const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ("b?");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity("b?help", { type: "PLAYING"});
});

client.on('message', msg => {
  if (msg.content === prefix+'ping') {
    msg.reply('Понг!');
  }
});

client.on('message', msg => {
if (msg.content === prefix+'help') {
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setURL('https://mrboomoff.gamejolt.io/')
	.setAuthor('Мои команды')
	.addFields(
		{ name: 'ping', value: 'Проверить, жив ли бот' },
		{ name: 'help', value: 'Показать команды бота' },
		{ name: 'server', value: 'Показать информацию об сервере' },
		{ name: 'user', value: 'Показать информацию об пользователе' },
	)
	.setFooter('Bot by MrBoom#4863', 'https://github.com/MrBoomO/discord-bot/raw/master/img/lggw43axm1641.png');

msg.channel.send(exampleEmbed);
}
});

client.on('message', msg => {
if (msg.content === prefix+'server') {
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setURL('https://mrboomoff.gamejolt.io/')
	.setAuthor('Информация об сервере')
	.addFields(
		{ name: 'Название', value: `${msg.guild.name}` },
		{ name: 'Регион', value: `${msg.guild.region}` },
		{ name: 'Подтверждён', value: `${msg.guild.verified}` },
		{ name: 'Количество пользователей', value: `${msg.guild.memberCount}` },
                { name: 'Дата создания сервера', value: `${msg.guild.createdAt}` },
                { name: 'Король сервера', value: `${msg.guild.owner}` }
	)
	.setFooter('Bot by MrBoom#4863', 'https://github.com/MrBoomO/discord-bot/raw/master/img/lggw43axm1641.png');

msg.channel.send(exampleEmbed);
}
});

client.on('message', message => {
if(message.content.startsWith(prefix+'user')){
    
        
        if(message.mentions.users.size){
            let member=message.mentions.users.first()
        if(member){
            const emb=new Discord.MessageEmbed().setImage(member.displayAvatarURL()).setTitle(member.username)
            message.channel.send(emb)
            
        }
        else{
            message.channel.send("Sorry none found with that name")

        }
        }else{
            const emb=new Discord.MessageEmbed().setImage(message.author.displayAvatarURL()).setTitle(message.author.username)
            message.channel.send(emb)
        }
}
});

client.on('message', message => {
  if (!message.guild) return;
   if (message.content.startsWith(prefix+'kick')) {
if (message.member.hasPermission("KICK_MEMBERS") {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Kicked by ChicaManager')
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
      } else {
       message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
} else {
message.reply("У вас не хватает прав");
  }
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix+'ban')) {
if (message.member.hasPermission("BAN_MEMBERS") {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
} else {
message.reply("У вас не хватает прав");
}
});

client.login(process.env.TOKEN);
