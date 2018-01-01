exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  var invite = "https://discordapp.com/oauth2/authorize?client_id=368115108641112064&scope=bot&permissions=195656";
  
  console.log(user.cyan+": ".cyan+message.content.white);
  channel.send("Here is my invite link! **"+invite+"**");
}
