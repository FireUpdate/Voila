exports.run = (message) => {
  try {
    if (message.member.hasPermission("BAN_MEMBERS")) {
      if (message.mentions.users.size != 0) {
        if (message.mentions.members.first().bannable) {
          message.mentions.members.first().ban().then(m => {
            channel.send(`:hammer: | **${m.user.username}** has been banned from **${message.guild.name}**. Bye bye!`);
          });
        } else {
          channel.send(`**${message.mentions.user.first().username}** is too priveledged for me to ban.`);
        }
      } else {
        channel.send('Please tag the user you would like to ban.')
      }
    } else {
      channel.send('You do not have permission to ban. You must have the `Ban Members` permission.');
    }
  } catch (err) {
    channel.send(`Either I am unable to ban **${message.mentions.users.first().username},** or I do not have permission to ban members.`);
  }
}
