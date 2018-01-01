exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  console.log(user.cyan+": ".cyan+message.content.white);
  try {
    channel.send({
      embed: {
        color: 3447003,
        title: message.mentions.users.first().username+"'s Avatar",
        image: {
            url: message.mentions.users.first().avatarURL
        }
      }
    });
  } catch (err) {
    channel.send({
      embed: {
        color: 3447003,
        title: message.author.username+"'s Avatar",
        image: {
            url: message.author.avatarURL
        }
      }
    });
  }
}
