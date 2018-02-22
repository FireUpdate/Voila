exports.run = (message) => {
  try {
    channel.send({
      embed: {
        color: embedColor,
        title: message.mentions.users.first().username+"'s Avatar",
        image: {
            url: message.mentions.users.first().avatarURL
        },
        footer: {
          text: `${prefix}avatar`
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
        },
        footer: {
          text: `${prefix}avatar`
        }
      }
    });
  }
  message.delete(10);
}
