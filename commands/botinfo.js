exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  console.log(user.cyan+": ".cyan+message.content.white+'\n');
  const pack = require('../package.json');
  const fs = require('fs');
  botInfo = [
    {
      name: 'Bot tag',
      value: `${bot.user.tag}`,
      inline: true
    },
    {
      name: 'Library',
      value: 'discord.js v11.3-dev',
      inline: true
    },
    {
      name: 'Ping',
      value: `Heartbeat: ${Math.round(bot.ping)}ms`,
      inline: true
    },
    {
      name: 'Server Count',
      value: `In ${bot.guilds.size} server(s)`,
      inline: true
    },
    {
      name: 'Bot ID',
      value: `${bot.user.id}`,
      inline: true
    },
    {
      name: 'Prefix',
      value: prefix,
      inline: true
    },
    {
      name: 'Discriminator',
      value: bot.user.discriminator,
      inline: true
    },
    {
      name: 'Description',
      value: pack.description,
      inline: true
    },
    {
      name: 'Commands',
      value: fileCount+1,
      inline: true
    }
  ];
  channel.send({
    embed: {
      color: 3447003,
      title: "Bot Info\n",
      thumbnail: {
        url: bot.user.avatarURL
      },
      fields: botInfo,
      footer: {
        icon_url: bot.user.avatarURL,
        text: prefix+'botinfo'
      }
    }
  });
}
