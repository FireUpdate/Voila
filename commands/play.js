exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  const auth = require('../auth.json');
  const ytdl = require('ytdl-core');
  const ytsearch = require('youtube-search');
  const Discord = require('discord.js');
  const YTApiKey = auth.yttoken;
  console.log(user.cyan+": ".cyan+message.content.white);
  var maxRes = 5;
  var opts = {
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

      try {
        var print = '';
        for (i=0;i<maxRes;i++) {
          print+=`[${i+1}] ${results[i].title}\n`
        }
      } catch (err) {
        console.log(err);
      }

      channel.send(`**${print}**`);
      var collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
      collector.on('collect', message => {
        try {
          if (parseInt(message.content) <= maxRes && parseInt(message.content) > 0) {
            try {
              message.member.voiceChannel.join().then(connection =>{
                stream = ytdl(results[parseInt(message.content)-1].link, {filter : 'audioonly'});
                dispatcher[dispatcher.length] = connection.playStream(stream);
                var last = dispatcher.length-1;
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
}
