global.Discord = require('discord.js');
global.auth = require('./auth.json');
global.pack = require('./package.json');
global.fs = require('fs');
global.figlet = require('figlet');
global.dbl = require(`discord-bot-list`);
global.colors = require('colors');
global.gistMake = require('create-gist');
global.YTApiKey = auth.yttoken;

// Configure logger settings
// Initialize Discord Bot
global.bot = new Discord.Client();
bot.login(auth.token);

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

bot.on("message", (message) => {
  if (message.content.substring(0, prefix.length).toLowerCase() == prefix && !message.author.bot) {
    global.args = message.content.substring(prefix.length).split(' ');
    let cmd = args[0].toLowerCase();
    args = args.splice(1);
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

case 'play':
  console.log(user.cyan+": ".cyan+message.content.white);
  let maxRes = 5;
  let opts = {
    maxResults: maxRes,
    key: YTApiKey
  };

  canPlay = false;
  try {
    if (dispatcher == '') {
      canPlay = true;
    } else {
      guildIDs = dispatcher.map(g => g.player.voiceConnection.channel.guild.id);
    }
    for(i=0;i<dispatcher.length;i++) {
      if ((guildIDs[i] == channel.guild.id && dispatcher[i].speaking == false) || !guildIDs.includes(channel.guild.id)) {
        canPlay = true;
      }
    }
  } catch (err) {
    canPlay = true;
  }

  if (canPlay) {
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
        try {
          if (parseInt(message.content) <= maxRes && parseInt(message.content) > 0) {
            try {
              message.member.voiceChannel.join().then(connection =>{
                stream = ytdl(results[parseInt(message.content)-1].link, {filter : 'audioonly'});
                dispatcher[dispatcher.length] = connection.playStream(stream);
                let last = dispatcher.length-1;
                dispatcher[last].on('end', () => {
                  dispatcher[last].player.voiceConnection.channel.leave()
                });
                //dispatcher.on("end", end => {bot.user.voiceChannel.leave();});
                channel.send(`**Now playing:** \`${results[parseInt(message.content)-1].title}\``);
              });
            } catch (error) {}
          } else {
            channel.send(`Please choose a value between 1 and ${maxRes}!`);
          }
        } catch(err) {channel.send('ERRR');}
      })
    });
  } else {
    channel.send('Already playing music!');
  }
break;*/
