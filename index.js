const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ("?");
const fs = require("fs");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity("?help", { type: "PLAYING"});
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
{ name: 'ban', value: 'Забанить пользователя' },
{ name: 'kick', value: 'Выгнать пользователя из сервера' },
{ name: 'msg', value: `Прислать важное сообщение` }


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
            message.channel.send("Не найден пользователь с данным ником")

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
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
if (message.member.hasPermission("KICK_MEMBERS")) {
        member
          .kick('Kicked by ChicaManager')
          .then(() => {
            message.reply(`Успешно выгнан ${user.tag}`);
          })
          .catch(err => {
            message.reply('Я не могу выгнать этого пользователя');
            console.error(err);
          });
} else {
message.reply("У вас не хватает прав");
}
      } else {
       message.reply("Этот пользователь не на сервере!");
      }
    } else {
      message.reply("Вы не указали пользователя, который будет изгнан!");
    }
}});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix+'ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
if (message.member.hasPermission("BAN_MEMBERS")) {
        member
          .ban({
            reason: 'Он был плохим!',
          })
          .then(() => {
            message.reply(`Успешно был забанен ${user.tag}`);
          })
          .catch(err => {
            message.reply('Я не могу забанить этого пользователя');
            console.error(err);
          })
} else {
message.reply("У вас не хватает прав");
}
      } else {
        message.reply("Этот пользователь не на сервере!");
      }
    } else {
      message.reply("Вы не указали пользователя, который получит бан!");
    }
}});

client.on('message', msg => {
if(msg.content.startsWith(prefix+'msg')) {
msg.channel.send(`First argument: ${args[0]}`);
}
});

client.on('message', msg => {
if(msg.content.startsWith(prefix+'say')) {
if(msg.member.id = "556160607339020315") {
     msg.channel.send(msg.content.substr(4));
}
     msg.delete();
}
});

client.on('message', msg => {
if(msg.content.startsWith(prefix+'destroy')) {
     msg.delete();
     console.log("Destroys...");
     client.destroy();
     msg.channel.send('Выключаюсь...')
}
});

client.on("message", message => {
    const swearWords = ["сука", "блять", "трах", "секс", "когда видео", "хуй", "блэт", "бля", "ска", "тварь", "порно", "анал"];
    if( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
      message.delete()
    }} )

client.login(process.env.TOKEN);
