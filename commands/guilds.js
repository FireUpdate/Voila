exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  console.log(user.cyan+": ".cyan+message.content.white);
  var botGuilds = bot.guilds.map(g => '**'+g.name + '  --  '+'** `'+g.id+'`');
  var myBotGuilds = '';
  for(i=0;i<botGuilds.length;i++) {
    myBotGuilds+=`**${i+1}  --**  ${botGuilds[i]}\n`;
  }
  if (userid == ownerid) {
    channel.send('Here are the guilds I am in! \n\n'+myBotGuilds);
  } else {
    channel.send("Only the owner of the bot can use this!");
  }
}
