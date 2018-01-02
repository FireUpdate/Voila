exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  console.log(user.cyan+": ".cyan+message.content.white);
  channel.send(":inbox_tray: **| "+user+",** the help menu has been sent to your PMs");
  message.author.send({
    embed: {
      color: 3447003,
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
            ' - `'+prefix+'guilds`  --  *List the names of every guild I\'m in*',
            ' - `'+prefix+'eval <input>`  --  *Enter a javascript command*',
            ' - `'+prefix+'restart`  --  *Restarts the bot*'
          ].join('\n')
        },
        {
          name: '__**Message Manager Commands**__',
          value: [
            ' - `'+prefix+'send #channel message`  --  *Send a message to a channel*',
            ' - `'+prefix+'purge <number>`  --  *Bulk delete messages. (100 max)*'
          ].join('\n')
        },
        {
          name: '__**User Commands**__',
          value: [
            ' - `'+prefix+'help`  --  *Open this help menu*',
            ' - `'+prefix+'donger`  --  *Bring that spicy memeness into the conversation*',
            ' - `'+prefix+'flip <table / bird>`  --  *Flips things*',
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
            ' - `'+prefix+'avatar [@user]`  --  *Mention not required. Gets a larger scale image of an avatar.*'
          ].join('\n')
        },
        {
          name: '__**Music Commands**__',
          value: [
            ' - `'+prefix+'play <search>`  --  *Play some music!*',
            ' - `'+prefix+'leave`  --  *Stop playing music!*'
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
