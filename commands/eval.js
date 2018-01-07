exports.run = (message) => {
  if (userid == ownerid) {
    try {
      let cmd = args.join(' ');

      channel.send({embed: {
        color: 3447003,
        title: "Evaluation",
        fields: [
          {
            name: ':inbox_tray: Input:',
            value: '```js\n'+cmd+'```'
          },
          {
            name: ':outbox_tray: Output:',
            value: '```js\n'+eval(cmd)+'```'
          }
        ],
        footer: {
          icon_url: bot.user.avatarURL,
          text: prefix+"eval"
        }
      }});

    } catch (error) {
      let cmd = "";
      for(i=0;i<args.length;i++) {
        cmd+=args[i]+" ";
      }

      channel.send({embed: {
        color: 3447003,
        title: "Evaluation",
        fields: [
          {
            name: ':inbox_tray: Input:',
            value: '```js\n'+cmd+'```'
          },
          {
            name: ':outbox_tray: Output:',
            value: '```\n'+error+'```'
          }
        ],
        footer: {
          icon_url: bot.user.avatarURL,
          text: prefix+"eval"
        }
      }});
    }
    message.delete();
  } else {
    channel.send("Only the owner of the bot can use this!");
  }
}
