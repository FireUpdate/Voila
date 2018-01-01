exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  console.log(user.cyan+": ".cyan+message.content.white);
  if (message.member.hasPermission("MANAGE_MESSAGES")) {
    try {
      if (args[0] != undefined && args[0].substring(0, 2) == "<#") {
        var msg = "";
        for(i=1;i<args.length;i++) {
          msg += args[i]+" "
        }
        bot.guild.channels.get(args[0].substring(2, args[0].length-1)).send("**"+user+": **"+msg);
        channel.send("Message sent!");
      } else {
        channel.send(args[0]+", is not a valid channel!");
      }
    } catch (error) {
      channel.send(args[0]+", is not a valid channel!");
    }
  } else {
    channel.send("You need the `manage messages` permission!");
  }
}
