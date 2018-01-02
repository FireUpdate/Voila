const Discord = require('discord.js');
const auth = require('./auth.json');
const pack = require('./package.json');
const fs = require('fs');
const figlet = require('figlet');
const ytdl = require('ytdl-core');
const dbl = require(`discord-bot-list`);
const ytsearch = require('youtube-search');
const colors = require('colors');
const gistMake = require('create-gist');
const YTApiKey = auth.yttoken;

global.dispatcher = [];
global.queue = [];

// Configure logger settings
// Initialize Discord Bot
let bot = new Discord.Client();
bot.login(auth.token);

bot.on('ready', () => {
  console.log(voilalog.cyan);
  console.log('      '+pack.description.cyan);
  console.log('      Logged in as: '.cyan+bot.user.tag.white + ' - '.cyan + '<@'.white + bot.user.id.white + '>'.white);
  console.log('      Prefix: '.cyan+prefix.white)
  console.log('      Set game to: '.cyan+defaultgame.white);

  const client = new dbl({
      token: auth.dbltoken,
      id: bot.user.id
  }) // Discord bot list sign in

  setInterval(function(){
    client.postStats(parseInt(bot.guilds.size), (err, res) => {
      if(err) {
          console.log('Error uploading guilds to server'.red);
      }
    });
  },60000); // Upload discord bot list guilds

  client.postStats(parseInt(bot.guilds.size), (err, res) => {
      if(err) {
          console.log("      "+err);
          console.log('      All bot interactions are logged below!'.cyan);
          console.log('-----------------------------------------------------------------------\n'.cyan);
      } else {
          console.log("      Successfully uploaded ".cyan+`${bot.guilds.size}`.white+" guilds to the website!".cyan);
          console.log('      All bot interactions are logged below!'.cyan);
          console.log('-----------------------------------------------------------------------\n'.cyan);
      }
  });

  bot.user.setPresence({
    status: "online",
    game: {
      name: defaultgame,
      type: 'PLAYING'
    }
  });  // Set default game

  var game = setInterval(function() {
    var games = [defaultgame, "In "+bot.guilds.size+" guilds!", "Voila is cool!", "Ping: "+Math.round(bot.ping)+"ms", "Happy New Year! 🎉"];
    gamenum+=1;
    bot.user.setPresence({
      status: "online",
      game: {
        name: games[gamenum%games.length],
        type: 'PLAYING'
      }
    });
  }, 15000);
});

const prefix = 'v!';
const defaultgame = prefix+"help"
const voilalog = [
  '',
  '██╗   ██╗ ██████╗ ██╗██╗      █████╗ ██╗',
  '██║   ██║██╔═══██╗██║██║     ██╔══██╗██║',
  '██║   ██║██║   ██║██║██║     ███████║██║',
  '╚██╗ ██╔╝██║   ██║██║██║     ██╔══██║╚═╝',
  ' ╚████╔╝ ╚██████╔╝██║███████╗██║  ██║██╗',
  '  ╚═══╝   ╚═════╝ ╚═╝╚══════╝╚═╝  ╚═╝╚═╝'].join('\n      ');
let gamenum = 0;
let invite = "https://discordapp.com/oauth2/authorize?client_id=368115108641112064&scope=bot&permissions=195656";
let pollreact = 0;
let poll = 0;

const reactions = [
  "#⃣",
  "0⃣",
  "1⃣",
  "2⃣",
  "3⃣",
  "4⃣",
  "5⃣",
  "6⃣",
  "7⃣",
  "8⃣",
  "9⃣",
  "🔟"];

const donger = [
  "( ͡^ ͜ʖ ͡^)",
  "(ﾉಠ_ಠ)ﾉ",
  "⋛⋋( ՞ਊ ՞)⋌⋚",
  "ヽ༼ ຈل͜ຈ༼ ຈل͜ຈ༽ຈل͜ຈ ༽ﾉ",
  "┬┴┬┴┤ ༼ຈل͜├┬┴┬┴",
  "♪ ಠ⌣ಠ",
  "୧༼ಠ益ರೃ༽୨",
  "༼ ºل͟º༼ ºل͟º༽ºل͟º ༽",
  "ᘳ◕ᴥ◕ᘰ",
  "O͡͡͡͡͡͡͡͡͡͡͡͡͡͡╮༼;´༎ຶ.̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̨̨̨̨̨̨̨̨̨̨̨̨.̸̸̨̨۝ ༎ຶ༽╭o͡͡͡͡͡͡͡͡͡͡͡͡͡͡",
  "Ѱζ༼ᴼل͜ᴼ༽ᶘѰ",
  "ɳ༼ຈل͜ຈ༽",
  "୧༼ಠ益ಠ༽୨",
  "/╲/\╭( ͡° ͡° ͜ʖ ͡° ͡°)╮/\╱\ ",
  "ᕦ( ͡°╭͜ʖ╮͡° )ᕤ"];

const Coin = [
  "Heads",
  "Tails"];

const ballresp = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt!',
  'Yes definitely.',
  'You may rely on it.',
  'As I see it, yes!',
  'Most likely',
  'Outlook good',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'];

const insult = [
  "is such an idiot, that he eats fucking desks for a meal. Grow up and eat normal food like bricks. That idiot.",
  "is so fucking fat, people who walk by.. wait I was going to say they call for a taxi, but they get caught in his fat before they can say anything.",
  "can go fuck his mother like he grew up doing.",
  "sucks some serious bumbum.",
  "Die. just die. Please",
  "can only get an erection from watching some furry shit. IDK how about brony on brony action.",
  "uses discord.io.",
  "is the inspiration for the joke, 'how do you get 4 gay guys on a barstool'.",
  "gets an erection when they look at 80 year old men."];

function optionfinder(i, word) {
  switch (i) {
    case 1:
      return(":one: | "+word.split(/,/)[i]);
    break;
    case 2:
      return(":two: | "+word.split(/,/)[i]);
    break;
    case 3:
      return(":three: | "+word.split(/,/)[i]);
    break;
    case 4:
      return(":four: | "+word.split(/,/)[i]);
    break;
    case 5:
      return(":five: | "+word.split(/,/)[i]);
    break;
    case 6:
      return(":six: | "+word.split(/,/)[i]);
    break;
    case 7:
      return(":seven: | "+word.split(/,/)[i]);
    break;
    case 8:
      return(":eight: | "+word.split(/,/)[i]);
    break;
    case 9:
      return(":nine: | "+word.split(/,/)[i]);
    break;
    case 10:
      return(":keycap_ten: | "+word.split(/,/)[i]);
    break;
  }
}

function react(reactnum, pollreact, message) {
  if (pollreact > 0) {
    setInterval(function(){
      if(reactnum < pollreact) {
        reactnum++;
        message.react(reactions[reactnum+1]);
      } else {
        clearInterval();
      }
    }, 500);
    poll = 0;
  }
}


bot.on("message", (message) => {
  if (message.content.substring(0, prefix.length).toLowerCase() == prefix && !message.author.bot) {
    var args = message.content.substring(prefix.length).split(' ');
    var cmd = args[0].toLowerCase();
    args = args.splice(1);
    const user = message.author.username;
    const usericon = message.author.avatarURL;
    const userid = message.author.id;
    const usertag = message.author;
    const channel = message.channel;
    const roles = message.member._roles;
    const ownerid = pack.ownerid;

    /*
    try {
      let commandFile = require(`./commands/${cmd}.js`);
      commandFile.run(bot, message, args, channel, user, usericon, userid, ownerid, prefix);
    } catch (err) {}

    exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
    }
    */

    switch(cmd) {
      case '8ball':
        console.log(user.cyan+": ".cyan+message.content.white);
        var ball = '';
        for (i=0;i<args.length;i++) {
          ball+=args[i]+' ';
        }
        channel.send({embed: {
          color: 0x00AAFF,
          title: "8ball \n",
          author: {
            name: user,
            icon_url: usericon
          },
          description: "Your question: **"+ball+"** \n\n**:8ball: | "+ballresp[Math.floor(Math.random() * ballresp.length)]+"**",
          footer: {
            icon_url: bot.user.avatarURL,
            text: prefix+"8ball | From "+user
          }
        }});
        message.delete(10);
      break;

      case 'ascii':
        console.log(user.cyan+": ".cyan+message.content.white);
        var max = 15;
        var text = "";
        var ascii = "";
        for(i=0;i<args.length;i++) {
          if (args[i+1] != undefined && (text.length+args[i].length+args[i+1].length) >= max) {
            text+=args[i]+" \n";
            max+=15;
          } else {
            text+=args[i]+" ";
          }
        }

        figlet.text(text, {
            font: 'Big',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }, function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            channel.send("```"+data+"```");
        });
        message.delete(100);
      break;

      case 'avatar':
        console.log(user.cyan+": ".cyan+message.content.white);
        try {
          channel.send({
            embed: {
              color: 3447003,
              title: message.mentions.users.first().username+"'s Avatar",
              image: {
                  url: message.mentions.users.first().avatarURL
              }
            }
          });
        } catch (err) {
          channel.send({
            embed: {
              color: 3447003,
              title: message.author.username+"'s Avatar",
              image: {
                  url: message.author.avatarURL
              }
            }
          });
        }
      break;

      case 'binary':
        console.log(user.cyan+": ".cyan+message.content.white);
        if (args[0] != undefined) {
          binary = "";
          for(i=0; i < args.length; i++) {
            for(j=0; j < args[i].length; j++) {
              if (isNaN(args[i]) || args[i].charCodeAt(j).toString(2)  == "0101110") {
                binary += "0"+args[i].charCodeAt(j).toString(2) + " ";
              } else {
                binary += "00"+args[i].charCodeAt(j).toString(2) + " ";
              }
            }
            if (i+1 != args.length) {
              binary+="00100000"+" "
            }
          }
        }

        channel.send("Here is your binary translation!: **"+binary+"**");
      break;

      case 'botinfo':
        console.log(user.cyan+": ".cyan+message.content.white);
        botInfo = [
          {
            name: 'Bot tag',
            value: `${bot.user.tag}`,
            inline: true
          },
          {
            name: 'Library',
            value: 'discord.js v11.3-dev',
            inline: true
          },
          {
            name: 'Ping',
            value: `Heartbeat: ${Math.round(bot.ping)}ms`,
            inline: true
          },
          {
            name: 'Server Count',
            value: `In ${bot.guilds.size} server(s)`,
            inline: true
          },
          {
            name: 'Bot ID',
            value: `${bot.user.id}`,
            inline: true
          },
          {
            name: 'Prefix',
            value: prefix,
            inline: true
          },
          {
            name: 'Discriminator',
            value: bot.user.discriminator,
            inline: true
          },
          {
            name: 'Description',
            value: pack.description,
            inline: true
          }
        ];
        channel.send({
          embed: {
            color: 3447003,
            title: "Bot Info\n",
            thumbnail: {
              url: bot.user.avatarURL
            },
            fields: botInfo,
            footer: {
              icon_url: bot.user.avatarURL,
              text: prefix+'botinfo'
            }
          }
        });
      break;

      case 'server':
        console.log(user.cyan+": ".cyan+message.content.white);
        gistMake({
          description: 'Users',
          public: false,
          files: [
            {
              name: 'Users.js',
              source: message.guild.members.map(m => `${m.user.tag}`).join('\n')
            }
          ]
        }).then(url => {
          channel.send({
            embed: {
              color: 3447003,
              title: "Server Info\n",
              thumbnail: {
                url: bot.user.avatarURL
              },
              fields: [
                {
                  name: 'Name',
                  value: `${message.guild.name}`,
                  inline: true
                },
                {
                  name: 'Region',
                  value: `${message.guild.region}`,
                  inline: true
                },
                {
                  name: 'Owner',
                  value: `${message.guild.owner.user.tag}`,
                  inline: true
                },
                {
                  name: 'Server ID',
                  value: `${message.guild.id}`,
                  inline: true
                },
                {
                  name: 'Roles',
                  value: `${message.guild.roles.size}`,
                  inline: true
                },
                {
                  name: 'Text Channels',
                  value: message.guild.channels.filter(c => c.type === 'text').size,
                  inline: true
                },
                {
                  name: 'Voice Channels',
                  value: message.guild.channels.filter(c => c.type === 'voice').size,
                  inline: true
                },
                {
                  name: 'Catagories',
                  value: message.guild.channels.filter(c => c.type !== 'voice' && c.type !== 'dm' && c.type !== 'group' && c.type !== 'text' && c.type !== 'unknown').size,
                  inline: true
                },
                {
                  name: 'Custom Emojis',
                  value: message.guild.emojis.size,
                  inline: true
                },
                {
                  name: 'Members',
                  value: `[List of all ${channel.guild.members.size} members.](${url})`,
                  inline: true
                }
              ],
              footer: {
                icon_url: bot.user.avatarURL,
                text: prefix+'server'
              }
            }
          })
        });
      break;

      case 'donger':
        console.log(user.cyan+": ".cyan+message.content.white);
        channel.send(donger[Math.round(Math.random() * donger.length)]);
        message.delete(100);
      break;

      case 'eval':
        console.log(user.cyan+": ".cyan+message.content.white);
        if (userid == ownerid) {
          try {
            var cmd = args.join(' ');

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
      break;

      case 'faq':
        console.log(user.cyan+": ".cyan+message.content.white);
        channel.send("Come on over to the faq guild and ask some questions, or just meet my creator! **https://discord.gg/uWEsUKw**");
      break;

      case 'flip':
        console.log(user.cyan+": ".cyan+message.content.white);
        if (args[0] == undefined) {
          channel.send("And it's "+Coin[Math.round(Math.random())]+"!!");
        } else if (args[0].toLowerCase() == "table") {
          channel.send("(╯°□°)╯︵ ┻━┻");
        } else if (args[0].toLowerCase() == "bird") {
          channel.send("( ° ͜ °)╭∩╮");
        }
      break;

      case 'help':
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
                  ' - `'+prefix+'server`  --  *Get some info about the server.*',
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
      break;

      case 'insult':
        console.log(user.cyan+": ".cyan+message.content.white);
        if (args[0] == bot.id) {
          channel.send(":rage: | You motherfucker...");
        } else if (args[0] != undefined && args[0].substring(0, 2) == "<@") {
          channel.send(":laughing: | "+args[0]+", "+insult[Math.round(Math.random() * insult.length)]);
        } else {
          channel.send(":laughing: | **"+user+"** just yelled some curse or some shit at the air because they are fucking retarted.");
        }
      break;

      case 'invite':
        console.log(user.cyan+": ".cyan+message.content.white);
        channel.send("Here is my invite link! **"+invite+"**");
      break;

      case 'ping':
        console.log(user.cyan+": ".cyan+message.content.white);
        let oldDate = Date.now();
        channel.send(":ping_pong: **| Pinging...**").then((msg) => {
          msg.edit({embed: {
            color: 0x00AAFF,
            title: ":ping_pong: | Pong!",
            thumbnail: {
              url: bot.user.avatarURL
            },
            fields: [
              {
                name: 'Heartbeat',
                value: `${Math.round(bot.ping)}ms`,
                inline: true
              },
              {
                name: 'Response Time',
                value: `${Date.now() - oldDate}ms`,
                inline: true
              }
            ],
            footer: {
              icon_url: bot.user.avatarURL,
              text: prefix+"ping"
            }
          }});
        });
      break;

      case 'poll':
        console.log(user.cyan+": ".cyan+message.content.white);
        var word = "";
        var options = "";
        var thing = 1;

        for(i=0;i<args.length;i++) {
          word+=args[i]+" ";
        }
        if (word.split(/,/).length <= 11) {
          for(i=1;i<word.split(/,/).length;i++) {
            if (word.split(/,/)[i] != " " && word.split(/,/)[i] != "") {
              options+="**"+optionfinder(i,word)+"**"+"\n";
            }
          }
          channel.send({embed: {
            color: 3447003,
            title: word.split(/,/)[0],
            author: {
              name: user,
              icon_url: usericon
            },
            description: options,
            footer: {
              icon_url: bot.user.avatarURL,
              text: prefix+'poll | From '+user
            }
          }}).then(msg => react(0, pollreact, msg));
          poll = 1;
          pollreact = word.split(/,/).length - 1;
        } else {
          channel.send("Too many options! There can only be a maximum of 10.");
        }
      break;

      case 'purge':
        console.log(user.cyan+": ".cyan+message.content.white);
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
          if (!isNaN(parseInt(args[0]))) {
            if (parseInt(args[0]) <= 100) {
              channel.bulkDelete(parseInt(args[0])+1);
              channel.send(`**Deleted ${parseInt(args[0])} messages!**`).then(msg => msg.delete(5000));
            } else {
              channel.send('Maximum of 100 messsages can be purged at a time.')
            }
          } else {
            channel.send('Please specify a value!')
          }
        } else {
          channel.send("You need the `manage messages` permission!");
      }
      break;

      case 'random':
        console.log(user.cyan+": ".cyan+message.content.white);
        if (args[1] == undefined) {
          channel.send("Please choose a number to begin, and end with. '"+prefix+"random 5 13'");
        } else if (args[0] != undefined && args[1] != undefined) {
          var min = parseInt(args[0])
          var max = parseInt(args[1])
          channel.send(Math.round(Math.random() * (max - min) + min));
        }
      break;

      case 'restart':
        console.log(user.cyan+": ".cyan+message.content.white);
        if (userid == ownerid) {
          channel.send(":robot: **| Restarting...**");

          setTimeout(function() {bot.destroy().then(() => process.exit());},500);
        } else {
          channel.send("Only the owner of the bot can use this!");
        }
      break;

      case 'send':
        console.log(user.cyan+": ".cyan+message.content.white);
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
          try {
            if (args[0] != undefined && args[0].substring(0, 2) == "<#") {
              var msg = "";
              for(i=1;i<args.length;i++) {
                msg += args[i]+" "
              }
              bot.guild.channels.get(args[0].substring(2, args[0].length-1)).send("**"+user+": **"+msg);
              channel.send("Message sent!");
            } else {
              channel.send(args[0]+", is not a valid channel!");
            }
          } catch (error) {
            channel.send(args[0]+", is not a valid channel!");
          }
        } else {
          channel.send("You need the `manage messages` permission!");
        }
      break;

      case 'smack':
        console.log(user.cyan+": ".cyan+message.content.white);
        if (args[0] == "@everyone") {
          channel.send(":hand_splayed: | Somehow, **"+user+"** just smacked every single one of you idiots. **lol.**");
        } else if (args[0] == bot.id) {
          channel.send(":hand_splayed: | **Voila!** just smacked **<@"+userID+">**!");
        } else if (args[0] != undefined && args[0].substring(0, 2) == "<@") {
          channel.send(":hand_splayed: | **"+user+"** just smacked **"+args[0]+"**!");
        } else {
          channel.send(":hand_splayed: | **"+user+"** just smacked... Wait what?... Aparently "+user+" just smacked the air? Why is this news? `distant yelling` 'Whoever did this I want fired! NOW!!'");
        }
      break;

      case 'leave':
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
      break;

      case 'play':
        console.log(user.cyan+": ".cyan+message.content.white);
        var maxRes = 5;
        var opts = {
          maxResults: maxRes,
          key: YTApiKey
        };

        canPlay = false;
        try {
          if (dispatcher == '') {
            canPlay = true;
          } else {
            guildIDs = dispatcher.map(g => g.player.voiceConnection.channel.guild.id);
          }
          for(i=0;i<dispatcher.length;i++) {
            if ((guildIDs[i] == channel.guild.id && dispatcher[i].speaking == false) || !guildIDs.includes(channel.guild.id)) {
              canPlay = true;
            }
          }
        } catch (err) {
          canPlay = true;
        }

        if (canPlay) {
          if (message.member.voiceChannel == undefined) {
            channel.send("You must be in a voice channel for this to work!");
            return;
          }

          ytsearch(args.join(' '), opts, function(err, results) {
            if(err) return console.log(err);

            try {
              var print = '';
              for (i=0;i<maxRes;i++) {
                print+=`[${i+1}] ${results[i].title}\n`
              }
            } catch (err) {
              console.log(err);
            }

            channel.send(`**${print}**`);
            var collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
            collector.on('collect', message => {
              try {
                if (parseInt(message.content) <= maxRes && parseInt(message.content) > 0) {
                  try {
                    message.member.voiceChannel.join().then(connection =>{
                      stream = ytdl(results[parseInt(message.content)-1].link, {filter : 'audioonly'});
                      dispatcher[dispatcher.length] = connection.playStream(stream);
                      var last = dispatcher.length-1;
                      dispatcher[last].on('end', () => {
                        dispatcher[last].player.voiceConnection.channel.leave()
                      });
                      //dispatcher.on("end", end => {bot.user.voiceChannel.leave();});
                      channel.send(`**Now playing:** \`${results[parseInt(message.content)-1].title}\``);
                    });
                  } catch (error) {}
                } else {
                  channel.send(`Please choose a value between 1 and ${maxRes}!`);
                }
              } catch(err) {channel.send('ERRR');}
            })
          });
        } else {
          channel.send('Already playing music!');
        }
      break;
    }
  }
});
