exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  console.log(user.cyan+": ".cyan+message.content.white);
  if (userid == ownerid) {
    channel.send(":robot: **| Restarting...**");

    setTimeout(function() {bot.destroy().then(() => process.exit());},500);
  } else {
    channel.send("Only the owner of the bot can use this!");
  }
}
