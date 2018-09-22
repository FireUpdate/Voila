global.Discord = require('discord.js');
global.pack = require('./package.json');
global.fs = require('fs');
global.figlet = require('figlet');
global.DBL = require(`dblapi.js`);
global.BFD = require('bfd-api');
global.colors = require('colors');

global.cleverbot = require('cleverbot.io');
global.smartbot = new cleverbot(auth.cleverbot.user, auth.cleverbot.key);
smartbot.setNick('Voila');

global.ytsearch = require('youtube-search');
global.ytdl = require('ytdl-core');
global.YTApiKey = Process.env.YTOKEN

// Configure logger settings
// Initialize Discord Bot
global.bot = new Discord.Client();
bot.login(Process.env.TOKEN);

bot.on('ready', () => {
  let eventFile = require(`./events/ready.js`);
  eventFile.run();
});

global.embedColor = 0x0096FF;
global.prefix = 'v!';
global.defaultgame = prefix+"help"
global.voilalog = [
  '',
  '██╗   ██╗ ██████╗ ██╗██╗      █████╗ ██╗',
  '██║   ██║██╔═══██╗██║██║     ██╔══██╗██║',
  '██║   ██║██║   ██║██║██║     ███████║██║',
  '╚██╗ ██╔╝██║   ██║██║██║     ██╔══██║╚═╝',
  ' ╚████╔╝ ╚██████╔╝██║███████╗██║  ██║██╗',
  '  ╚═══╝   ╚═════╝ ╚═╝╚══════╝╚═╝  ╚═╝╚═╝'].join('\n      ');

bot.on("message", async (message) => {
  if (!message.author.bot) {
    if (message.content.substring(0, prefix.length).toLowerCase() == prefix || message.content.startsWith(`<@${bot.user.id}>`) || message.content.startsWith(`<@!${bot.user.id}>`)) {
      global.args;
      let cmd;
      if (message.content.substring(0, prefix.length).toLowerCase() == prefix) {
        args = message.content.substring(prefix.length).split(' ');
        cmd = args[0].toLowerCase();
        args = args.splice(1);
      } else {
        args = message.content.split(' ');
        cmd = args[1].toLowerCase();
        args = args.splice(2);
      }
      global.user = message.author.username;
      global.usericon = message.author.avatarURL;
      global.userid = message.author.id;
      global.usertag = message.author;
      global.channel = message.channel;
      global.ownerid = pack.ownerid;
      try {
        const roles = message.member._roles;
      } catch (err) {}

      if (fs.existsSync(`./commands/${cmd}.js`)) {
        let commandFile = require(`./commands/${cmd}.js`);

        console.log(user.cyan+": ".cyan+message.content.white);
        commandFile.run(message);
      }
      /*
          exports.run = (message) => {
          }
      */
    }
  }
});

/*
case 'leave':
  console.log(user.cyan+": ".cyan+message.content.white);
  if (message.member.voiceChannelID != null) {
    try {
      for(i=0;i<dispatcher.length;i++) {
        if (message.member.voiceChannelID == dispatcher[i].player.voiceConnection.channel.id ) {
          dispatcher[i].end();
        }
      }
      console.log("Disconnected from "+message.member.voiceChannel.name+"\n");
    } catch (err) {
      channel.send('You are not in the same voice channel as me!');
    }
  } else {
    channel.send("You must be in a voice channel for this to work!");
  }
break;


let dispatcher;

exports.run = (message) => {
  let maxRes = 5;
  let opts = {
    maxResults: maxRes,
    key: YTApiKey
  };

  if (message.member.voiceChannel == undefined) {
    channel.send("You must be in a voice channel for this to work!");
    return;
  }

  ytsearch(args.join(' '), opts, function(err, results) {
    if(err) return console.log(err);

    let print = '';
    try {
      for (i=0;i<maxRes;i++) {
        print+=`[${i+1}] ${results[i].title}\n`
      }
    } catch (err) {
      console.log(err);
    }

    channel.send(`**${print}**`);
    let collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
    collector.on('collect', message => {
        if (parseInt(message.content) <= maxRes && parseInt(message.content) > 0) {
            message.member.voiceChannel.join()
              .then(connection => {
                let stream = ytdl(results[parseInt(message.content)-1].link, {filter : 'audioonly'});
                dispatcher = connection.playStream(stream);
                channel.send(`**Now playing:** \`${results[parseInt(message.content)-1].title}\``);
              });
        } else {
          channel.send(`Please choose a value between 1 and ${maxRes}!`);
        }
    })
  });
}*/
