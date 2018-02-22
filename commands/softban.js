exports.run = (message) => {
  try {
    if (message.member.hasPermission("BAN_MEMBERS")) {
      if (message.mentions.users.size != 0) {
        if (message.mentions.members.first().bannable) {
          message.mentions.members.first().ban().then(m => {
            message.guild.unban(message.mentions.users.first()).then((err) => {
              channel.send(`:hammer: | **${m.user.username},** has been soft-banned from **${message.guild.name}**.`);
            })
          });
        } else {
          channel.send(`**${message.mentions.user.first().username},** is too priveledged for me to soft-ban.`);
        }
      } else {
        channel.send('Please tag the user you would like to soft-ban.')
      }
    } else {
      channel.send('You do not have permission to soft-ban. You must have the `Ban Members` permission.');
    }
  } catch (err) {
    channel.send(`Either I am unable to ban **${message.mentions.users.first().username},** or I do not have permission to ban members.`);
  }
}
