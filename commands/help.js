exports.run = (message) => {
  channel.send(`:inbox_tray: **| ${user},** the help menu has been sent to you directly.`);
  message.author.send({
    embed: {
      color: embedColor,
      title: "Voila! Help Menu",
      thumbnail: {
        url: bot.user.avatarURL
      },
      fields: [
        {
          name: `**Prefix: __${prefix}__**`,
          value: '--------------------------------------------------'
        },
        {
          name: '__**Moderation Commands**__',
          value: [
            ' - `'+prefix+'kick [@user]`  --  *Kick somebody out of your server.*',
            ' - `'+prefix+'ban [@user]`  --  *Ban somebody from your server.*',
            ' - `'+prefix+'softban [@user]`  --  *Softban somebody. Basically a kick, but it clears messages.*',
            ' - `'+prefix+'purge [number]`  --  *Bulk delete messages. (1-100)*'
          ].join('\n')
        },
        {
          name: '__**Fun Commands**__',
          value: [
            ' - `'+prefix+'help`  --  *Open this help menu*',
            ' - `'+prefix+'flip`  --  *Flip a coin!*',
            ' - `'+prefix+'smack [@user]`  --  *Smacks somebody*',
            ' - `'+prefix+'poll [question], [option], [option]`  --  *Creates a poll. 10 max options.*',
            ' - `'+prefix+'ascii [text]`  --  *Converts text to ascii*',
            ' - `'+prefix+'ping`  --  *Get discord\'s heartbeat, and the response time of the bot.*',
            ' - `'+prefix+'8ball [question]`  --  *Ask me anything!*',
            ' - `'+prefix+'botinfo`  --  *Get some info about Voila!*',
            ' - `'+prefix+'server`  --  *Get some info about the server.*',
            ' - `'+prefix+'avatar [@user]`  --  *Mention not required. Gets a larger scale image of an avatar.*',
            ' - `'+prefix+'discrim`  --  *Search every guild I am in for somebody with a certain discriminator*',
          ].join('\n')
        },
        {
          name: `__**Economy**__`,
          value: [
            ' - `'+prefix+'credits`  --  *Check how many credits you have*',
            ' - `'+prefix+'daily`  --  *Get 250 credits every day!*',
            ' - `'+prefix+'pay [@user] [1-5000]`  --  *Send credits. (5000 max)*'
          ].join('\n')
        }
      ],
      footer: {
        text: prefix+'help'
      }
    }
  });
}
