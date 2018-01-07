exports.run = (message) => {
  let myOutput = '';
  if (args.length >= 1) {
    if (!isNaN(parseInt(args[0].substring(0,4)))) {
      myOutput = bot.users.filter(u => u.discriminator == parseInt(args[0].substring(0,4))).map(u => u.tag).join('\n');
    }
  } else {
    myOutput = bot.users.filter(u => u.discriminator == message.author.discriminator).map(u => u.tag).join('\n');
  }
  if (myOutput.length == 0) {
    channel.send('Nobody found with that discriminator!')
  } else {
    channel.send({
      embed: {
        color: 3447003,
        title: 'Discrim Search',
        fields: [
          {
            name: 'Discriminator Search Results',
            value: `${myOutput}`
          }
        ],
        footer: {
          icon_url: bot.user.avatarURL,
          text: prefix+'discrim'
        }
      }
    });
  }
}
