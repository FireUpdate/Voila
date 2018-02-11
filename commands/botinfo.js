exports.run = (message) => {
  let fileCount = 0;
  fs.readdir('./commands/', (err, files) => {
    fileCount = files.length;
    channel.send({
      embed: {
        color: embedColor,
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
            value: `discord.js ${Discord.version}`,
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
          },
          {
            name: 'FAQ Server',
            value: '[Join the FAQ channel](https://discord.gg/uWEsUKw)',
            inline: true
          },
          {
            name: 'Github',
            value: '[View the github](https://github.com/PlayBy/Voila)',
            inline: true
          },
          {
            name: 'Discord Bot List',
            value: '[View the listing on DBL](https://discordbots.org/bot/368115108641112064)',
            inline: true
          },
          {
            name: 'Invite',
            value: '[Click to invite Voila!](https://discordapp.com/oauth2/authorize?client_id=368115108641112064&scope=bot&permissions=195656)',
            inline: true
          }
        ],
        footer: {
          text: `${prefix}botinfo`
        }
      }
    });
  });
}
