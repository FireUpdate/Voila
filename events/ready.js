let gamenum = 0;
const os = require('os');

exports.run = () => {
  global.dbl = new DBL(auth.dbltoken, bot);
  global.bfd = new BFD(auth.bfdtoken);

  setInterval(function(){
    dbl.postStats(bot.guilds.size).catch(err => {console.log(`Error ${err.code}: Error uploading guild count to DBL`.red)});
    bfd.postCount(`${bot.guilds.size}`, `${bot.user.id}`).catch(err => {console.log(`Error ${err.code}: Error uploading guild count to BFD`.red)});
  },60000); // Upload discord bot list guilds


  console.log('--------------------------------------------------------------------------------'.cyan);
  console.log([
    '',
    '                ::::::       '.cyan+'Cpu Name: '.cyan+`${os.cpus()[1].model}`.white,
    '                :::::::      '.cyan+'Logged in as: '.cyan+bot.user.tag.white,
    '....`     ,,.   :::::::      '.cyan+'Prefix: '.cyan+prefix.white,
    '::::::` ::::::  :::::::      '.cyan+'Activity: '.cyan+defaultgame.white,
    '::::::: ::::::: .:::::       '.cyan+'Guilds: '.cyan+`${bot.guilds.size}`.white,
    ' :::::: ::::::`  :::         '.cyan+'Os: '.cyan+`${os.platform()}`.white,
    ' :::::: ::::::   :::::       '.cyan+'Cpu Count: '.cyan+`${os.cpus().length}`.white,
    ' .:::::::::::.  :::::::      '.cyan+'Directory: '.cyan+`${__dirname}`.white,
    '  :::::::::::   :::::::.     '.cyan+'Owner: '.cyan+'SharkFin#2790'.white,
    '   .:::::::      :::::       '.cyan+'Voila,'.cyan+' the fun moderation bot.'.white,
    '     `,,.          .`        '.cyan+'All bot interactions will be logged below'.cyan].join('\n   '));
  console.log('--------------------------------------------------------------------------------\n'.cyan);

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
