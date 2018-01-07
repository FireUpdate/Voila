let gamenum = 0;
exports.run = () => {
  const client = new dbl({
      token: auth.dbltoken,
      id: bot.user.id
  }) // Discord bot list sign in

  setInterval(function(){
    client.postStats(parseInt(bot.guilds.size), (err, res) => {
      if(err) {
          console.log('Error uploading guilds to server'.red);
      }
    });
  },60000); // Upload discord bot list guilds
  
  console.log(voilalog.cyan);
  console.log('      '+pack.description.cyan);
  console.log('      Logged in as: '.cyan+bot.user.tag.white + ' - '.cyan + '<@'.white + bot.user.id.white + '>'.white);
  console.log('      Prefix: '.cyan+prefix.white)
  console.log('      Set game to: '.cyan+defaultgame.white);

  client.postStats(parseInt(bot.guilds.size), (err, res) => {
      if(err) {
          console.log("      "+err);
          console.log('      All bot interactions are logged below!'.cyan);
          console.log('-----------------------------------------------------------------------\n'.cyan);
      } else {
          console.log("      Successfully uploaded ".cyan+`${bot.guilds.size}`.white+" guilds to the website!".cyan);
          console.log('      All bot interactions are logged below!'.cyan);
          console.log('-----------------------------------------------------------------------\n'.cyan);
      }
  });

  bot.user.setPresence({
    status: "online",
    game: {
      name: defaultgame,
      type: 'PLAYING'
    }
  });  // Set default game

  let game = setInterval(function() {
    let games = [defaultgame, "In "+bot.guilds.size+" guilds!", `${(new Date).toDateString()}`, "Ping: "+Math.round(bot.ping)+"ms"];
    gamenum+=1;
    bot.user.setPresence({
      status: "online",
      game: {
        name: games[gamenum%games.length],
        type: 'PLAYING'
      }
    });
  }, 15000);

  bot.on('guildCreate', guild => {
    let logChan = bot.channels.get('399220613195104257');
    logChan.send({
      embed: {
        color: 0x44FF44,
        title: 'Guild Joined!',
        thumbnail: {
          url: guild.iconURL
        },
        fields: [
          {
            name: 'Name',
            value: guild.name,
            inline: true
          },
          {
            name: 'Owner',
            value: guild.owner.user.username,
            inline: true
          },
          {
            name: 'Members',
            value: guild.members.filter(m => m.user.bot == false).size,
            inline: true
          },
          {
            name: 'Bots',
            value: guild.members.filter(m => m.user.bot == true).size,
            inline: true
          },
          {
            name: 'Voila Guild Count',
            value: bot.guilds.size,
            inline: true
          }
        ],
        footer: {
          icon_url: bot.user.avatarURL,
          text: new Date()
        }
      }
    });
  });

  bot.on("guildDelete", guild => {
    let logChan = bot.channels.get('399220613195104257');
    logChan.send({
      embed: {
        color: 0xFF4444,
        title: 'Guild Left!',
        thumbnail: {
          url: guild.iconURL
        },
        fields: [
          {
            name: 'Name',
            value: guild.name,
            inline: true
          },
          {
            name: 'Owner',
            value: guild.owner.user.username,
            inline: true
          },
          {
            name: 'Members',
            value: guild.members.filter(m => m.user.bot == false).size,
            inline: true
          },
          {
            name: 'Bots',
            value: guild.members.filter(m => m.user.bot == true).size,
            inline: true
          },
          {
            name: 'Voila Guild Count',
            value: bot.guilds.size,
            inline: true
          }
        ],
        footer: {
          icon_url: bot.user.avatarURL,
          text: new Date()
        }
      }
    });
  });
}
