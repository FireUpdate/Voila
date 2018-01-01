exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  console.log(user.cyan+": ".cyan+message.content.white);
  if (args[0] == "@everyone") {
    channel.send(":hand_splayed: | Somehow, **"+user+"** just smacked every single one of you idiots. **lol.**");
  } else if (args[0] == bot.id) {
    channel.send(":hand_splayed: | **Voila!** just smacked **<@"+userID+">**!");
  } else if (args[0] != undefined && args[0].substring(0, 2) == "<@") {
    channel.send(":hand_splayed: | **"+user+"** just smacked **"+args[0]+"**!");
  } else {
    channel.send(":hand_splayed: | **"+user+"** just smacked... Wait what?... Aparently "+user+" just smacked the air? Why is this news? `distant yelling` 'Whoever did this I want fired! NOW!!'");
  }
}
