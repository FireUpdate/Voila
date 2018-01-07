exports.run = (message) => {
  let fileCount = 0;
  fs.readdir('./commands/', (err, files) => {
    fileCount = files.length;
    channel.send({
      embed: {
        color: 3447003,
        title: "Bot Info\n",
        thumbnail: {
          url: bot.user.avatarURL
        },
        fields: [
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
            value: fileCount,
            inline: true
          }
        ],
        footer: {
          icon_url: bot.user.avatarURL,
          text: prefix+'botinfo'
        }
      }
    });
  });
}
