exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  console.log(user.cyan+": ".cyan+message.content.white);
  let oldDate = Date.now();
  channel.send(":ping_pong: **| Pinging...**").then((msg) => {
    msg.edit({embed: {
      color: 0x00AAFF,
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
