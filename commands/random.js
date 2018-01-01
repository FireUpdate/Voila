exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  console.log(user.cyan+": ".cyan+message.content.white);
  if (args[1] == undefined) {
    channel.send("Please choose a number to begin, and end with. '"+prefix+"random 5 13'");
  } else if (args[0] != undefined && args[1] != undefined) {
    var min = parseInt(args[0])
    var max = parseInt(args[1])
    channel.send(Math.round(Math.random() * (max - min) + min));
  }
}
