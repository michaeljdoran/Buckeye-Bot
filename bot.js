// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

const token = 'NTE1OTI3ODg4NTk2MzAzOTEy.DtsRpA.dWl9Ws9t-TLi8Yv1KDaFhOWjUK8';

client.on('ready', () =>
{
});

client.on('message', message =>
{
  var isbot = message.author.bot;
  if (isbot === false)
  {
    var text = message.content;
    if ((!text.includes('www') || !text.includes('.com'))) {
      if(text.includes('Michigan') || text.includes('michigan')) {
        var copypasta = 'Overheard in ❌ichigan locker room after Game 7:\n\"He got me,\" Harbaugh said of Meyer\'s coaching against him. \"That f***ing Meyer boomed me.\"\nHarbaugh added, \"He\’s so good,\" repeating it four times.\nHarbaugh then said he wanted to add Meyer to the list of coaches that would cost him his job.';
        message.channel.send(copypasta);
      } else if (text.includes('OSU')) {
        var squad = 'Injured defensive end Nick Bosa yelled out, \"There you go! There you go.\" Quarterback Dwayne Haskins gave a look of pleasant surprise. Wide Receiver Paris Campbell yelled out, \"We got an [expletive] squad now.\" And before Meyer hit the locker room door, former OSU great Eddie George hugged him and said, \"Y\'all look so different.\"';
        message.channel.send(squad);
      } else if ((text.includes('m') || text.includes('M'))){
        var newMessage = '<@' + message.author.id + '> ' + text.replace(/([Mm])/g, '❌');
        message.channel.send(newMessage);
      }
    }
  }
});

// Log our bot in
client.login(token);
