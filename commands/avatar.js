exports.run = (message) => {
  try {
    channel.send({
      embed: {
        color: embedColor,
        title: message.mentions.users.first().username+"'s Avatar",
        image: {
            url: message.mentions.users.first().avatarURL
        }
      }
    });
  } catch (err) {
    channel.send({
      embed: {
        color: embedColor,
        title: message.author.username+"'s Avatar",
        image: {
            url: message.author.avatarURL
        }
      }
    });
  }
}
