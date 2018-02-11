exports.run = (message) => {
  try {
    if (message.member.hasPermission("KICK_MEMBERS")) {
      if (message.mentions.users.size != 0) {
        if (message.mentions.members.first().kickable) {
          message.mentions.members.first().kick().then(m => {
            channel.send(`:boot: | **${m.user.username},** has been kicked from **${message.guild.name}**. Bye bye!`);
          });
        } else {
          channel.send(`**${message.mentions.user.first().username},** is too priveledged for me to kick.`);
        }
      } else {
        channel.send('Please tag the user you would like to kick.')
      }
    }
  } catch (err) {
    channel.send(`Either I am unable to kick **${message.mentions.users.first().username},** or I do not have permission to kick members.`);
  }
}
