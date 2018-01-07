exports.run = (message) => {
  if (userid == ownerid) {
    channel.send(":robot: **| Restarting...**");

    setTimeout(function() {bot.destroy().then(() => process.exit());},500);
  } else {
    channel.send("Only the owner of the bot can use this!");
  }
}
