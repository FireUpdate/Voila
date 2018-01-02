exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  const fs = require('fs');
  console.log(user.cyan+": ".cyan+message.content.white);
  if (userid == ownerid) {
    fs.readdir("./Discord\ Bot/commands/", (err, files) => {
      try {
        files.forEach(f => {
          delete require.cache[require.resolve(`./${f}`)];
        });
      } catch (err) {}
    });

    fs.readdir('./commands/', (err, files) => {
      try {
        files.forEach(f => {
          delete require.cache[require.resolve(`./${f}`)];
        });
      } catch (err) {}
    });

    channel.send(`:robot: **| Commands Reloaded**`).then(msg => {msg.delete(3000)});
    message.delete();
  }
};
