exports.run = (message) => {
  channel.send(":inbox_tray: **| "+user+",** the help menu has been sent to your PMs");
  message.author.send({
    embed: {
      color: embedColor,
      title: "Voila Help Menu",
      author: {
        name: user,
        icon_url: usericon
      },
      fields: [
        {
          name: '__**Use the '+prefix+' as the prefix!**__',
          value: '--------------------------------------------------'
        },
        {
          name: '__**Bot Owner Commands**__',
          value: [
            ' - `'+prefix+'eval <input>`  --  *Enter a javascript command*',
            ' - `'+prefix+'restart`  --  *Restarts the bot*'
          ].join('\n')
        },
        {
          name: '__**Message Manager Commands**__',
          value: [
            ' - `'+prefix+'purge <number>`  --  *Bulk delete messages. (100 max)*'
          ].join('\n')
        },
        {
          name: '__**User Commands**__',
          value: [
            ' - `'+prefix+'help`  --  *Open this help menu*',
            ' - `'+prefix+'donger`  --  *Bring that spicy memeness into the conversation*',
            ' - `'+prefix+'flip`  --  *Flip a coin!*',
            ' - `'+prefix+'random <low> <high>`  --  *Generates a random number between two specified values*',
            ' - `'+prefix+'faq`  --  *Join the faq channel!*',
            ' - `'+prefix+'smack <@user>`  --  *Smacks somebody*',
            ' - `'+prefix+'binary <test>`  --  *Convert test to binary*',
            ' - `'+prefix+'insult <@user>`  --  *Throws an insult at a user*',
            ' - `'+prefix+'poll <question>, <option>, <option>`  --  *Creates a poll. 10 max options.*',
            ' - `'+prefix+'invite`  --  *Send the invite link into chat*',
            ' - `'+prefix+'ascii <text>`  --  *Converts text to ascii*',
            ' - `'+prefix+'ping`  --  *Pings the bot*',
            ' - `'+prefix+'8ball <question>`  --  *Ask me anything!*',
            ' - `'+prefix+'botinfo`  --  *Get some info about Voila!*',
            ' - `'+prefix+'server`  --  *Get some info about the server.*',
            ' - `'+prefix+'avatar [@user]`  --  *Mention not required. Gets a larger scale image of an avatar.*',
            ' - `'+prefix+'discrim`  --  *Search every guild I am in for somebody with a certain discriminator*',
          ].join('\n')
        }
      ],
      footer: {
        icon_url: bot.user.avatarURL,
        text: prefix+'help'
      }
    }
  });
}
