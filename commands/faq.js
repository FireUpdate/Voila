exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  console.log(user.cyan+": ".cyan+message.content.white);
  channel.send("Come on over to the faq guild and ask some questions, or just meet my creator! **https://discord.gg/uWEsUKw**");
}
