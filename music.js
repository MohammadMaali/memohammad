const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
var prefix = "Le";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 404569696235552768) return;


if (message.content.startsWith(prefix + 'playing')) {
client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
} else


if (message.content.startsWith(prefix + 'streem')) {
client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
    message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
} else


if (message.content.startsWith(prefix + 'watching')) {
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
}

 });
















client.login("NDkyMjk3NDQxMjY2MTA2MzY5.Dr699w.iTvMHoQHAGicnYioYF3KRacT0ww");
