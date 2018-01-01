exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  console.log(user.cyan+": ".cyan+message.content.white);
  if (message.member.voiceChannelID != null) {
    try {
      for(i=0;i<dispatcher.length;i++) {
        if (message.member.voiceChannelID == dispatcher[i].player.voiceConnection.channel.id ) {
          dispatcher[i].end();
        }
      }
      console.log("Disconnected from "+message.member.voiceChannel.name+"\n");
    } catch (err) {
      channel.send('You are not in the same voice channel as me!');
    }
  } else {
    channel.send("You must be in a voice channel for this to work!");
  }
}
