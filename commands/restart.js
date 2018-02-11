exports.run = (message) => {
  if (userid == ownerid) {
    channel.send(":robot: **| Restarting...**");

    setTimeout(function() {bot.destroy().then(() => process.exit());},500);
  }
}
