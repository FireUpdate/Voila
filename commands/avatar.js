exports.run = (message) => {
  try {
    channel.send({
      embed: {
        color: embedColor,
        title: message.mentions.users.first().username+"'s Avatar",
        url: message.mentions.users.first().avatarURL,
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
        url: message.author.avatarURL,
        image: {
            url: message.author.avatarURL
        },
        footer: {
          text: `${prefix}avatar`
        }
      }
    });
  }
  message.delete(10);
}
