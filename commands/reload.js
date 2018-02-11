exports.run = (message) => {
  if (userid == ownerid) {
    fs.readdir('./commands/', (err, files) => {
      delete files.forEach(f => {
        require.cache[require.resolve(`./${f}`)]
      });
    });
    channel.send(":robot: **| Commands Reloaded!**");
  }
};
