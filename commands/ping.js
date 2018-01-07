exports.run = (message) => {
  let oldDate = Date.now();
  channel.send(":ping_pong: **| Pinging...**").then((msg) => {
    msg.edit({embed: {
      color: embedColor,
      title: ":ping_pong: | Pong!",
      thumbnail: {
        url: bot.user.avatarURL
      },
      fields: [
        {
          name: 'Heartbeat',
          value: `${Math.round(bot.ping)}ms`,
          inline: true
        },
        {
          name: 'Response Time',
          value: `${Date.now() - oldDate}ms`,
          inline: true
        }
      ],
      footer: {
        icon_url: bot.user.avatarURL,
        text: prefix+"ping"
      }
    }});
  });
}
