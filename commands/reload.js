exports.run = (message) => {
  fs.readdir('./commands/', (err, files) => {
    delete files.forEach(f => {
      require.cache[require.resolve(`./${f}`)]
    });
  });
  channel.send(":robot: **| Commands Reloaded!**");
};
