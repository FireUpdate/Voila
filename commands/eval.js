exports.run = (message) => {
  if (userid == ownerid) {
    try {
      let cmd = args.join(' ');

      channel.send({embed: {
        color: embedColor,
        title: "Eval - Javascript",
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
          text: `${prefix}eval`
        }
      }});

    } catch (error) {
      let cmd = "";
      for(i=0;i<args.length;i++) {
        cmd+=args[i]+" ";
      }

      channel.send({embed: {
        color: embedColor,
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
          text: `${prefix}eval`
        }
      }});
    }
    message.delete(10);
  }
}
