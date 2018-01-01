exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  console.log(user.cyan+": ".cyan+message.content.white);
  if (userid == ownerid) {
    try {
      var cmd = "";
      for(i=0;i<args.length;i++) {
        cmd+=args[i]+" ";
      }

      channel.send({embed: {
        color: 3447003,
        title: "Evaluation",
        description: ":inbox_tray: **Input:**\n```javascript\n"+cmd+"```\n :outbox_tray: **Output:**\n```javascript\n"+eval(cmd)+"``` ",
        footer: {
          icon_url: bot.user.avatarURL,
          text: prefix+"eval"
        }
      }});

    } catch (error) {
      var cmd = "";
      for(i=0;i<args.length;i++) {
        cmd+=args[i]+" ";
      }

      channel.send({embed: {
        color: 3447003,
        title: "Evaluation",
        description: ":inbox_tray: **Input:**\n```javascript\n"+cmd+"```\n :outbox_tray: **Output:**\n```"+error+"``` ",
        footer: {
          icon_url: bot.user.avatarURL,
          text: prefix+"eval"
        }
      }});
    }
  } else {
    channel.send("Only the owner of the bot can use this!");
  }
}
