const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ("!");
const fs = require("fs");
let db = JSON.parse(fs.readFileSync("./xp.json", "utf8"));

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity("!help", { type: "PLAYING"});
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
if(message.content.startsWith(prefix+'prefix')) {
console.log("Changing prefix");
}
});


client.on("message", message => {
    if (message.author.bot) return;
    if (!db[message.author.id]) db[message.author.id] = {
        xp: 0,
        level: 0
      };
    db[message.author.id].xp++;
    let userInfo = db[message.author.id];
    if(userInfo.xp > 100) {
        userInfo.level++
        userInfo.xp = 0
        message.reply("Поздравляем, ты достиг нового уровня!")
    }
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd === "info") {
        let userInfo = db[message.author.id];
        let member = message.mentions.members.first();
        let embed = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("Level", userInfo.level)
        .addField("XP", userInfo.xp+"/100");
        if(!member) return message.channel.sendEmbed(embed)
        let memberInfo = db[member.id]
        let embed2 = new Discord.RichEmbed()
        .setColor(0x4286f4)
        .addField("Level", memberInfo.level)
        .addField("XP", memberInfo.xp+"/100")
        message.channel.sendEmbed(embed2)
    }
    fs.writeFile("./xp.json", JSON.stringify(db), (x) => {
        if (x) console.error(x)
      });
})


client.login(process.env.TOKEN);
