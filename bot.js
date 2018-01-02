const Discord = require('discord.js');
const auth = require('./auth.json');
const pack = require('./package.json');
const fs = require('fs');
const figlet = require('figlet');
const ytdl = require('ytdl-core');
const dbl = require(`discord-bot-list`);
const ytsearch = require('youtube-search');
const colors = require('colors');

global.dispatcher = [];
global.queue = [];

// Configure logger settings
// Initialize Discord Bot
let bot = new Discord.Client();
bot.login(auth.token);

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
    var games = [defaultgame, "In "+bot.guilds.size+" guilds!", "Voila is cool!", "Ping: "+Math.round(bot.ping)+"ms"];
    gamenum+=1;
    bot.user.setPresence({
      status: "online",
      game: {
        name: games[gamenum%games.length],
        type: 'PLAYING'
      }
    });
  }, 15000);

    fs.readdir("./Discord\ Bot/commands/", (err, files) => {
      try {
        global.fileCount = files.length;
      } catch(err) {}
    });

    fs.readdir('./commands/', (err, files) => {
      try {
        global.fileCount = files.length;
      } catch (err) {}
    });
});



bot.on("message", (message) => {
  if (message.author.id == bot.id) {
    console.log("Voila!: ".cyan+message.content.white+"\n");
  }

  if (message.content.substring(0, prefix.length).toLowerCase() == prefix && !message.author.bot) {
    var args = message.content.substring(prefix.length).split(' ');
    var cmd = args[0].toLowerCase();
    args = args.splice(1);
    const user = message.author.username;
    const usericon = message.avatarURL;
    const userid = message.author.id;
    const usertag = message.author;
    const channel = message.channel;
    const roles = message.member._roles;
    const ownerid = pack.ownerid;

    try {
      let commandFile = require(`./commands/${cmd}.js`);
      commandFile.run(bot, message, args, channel, user, usericon, userid, ownerid, prefix);
    } catch (err) {}

    /*
    exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
    }
    */

    switch(cmd) {
      case "help":
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
      break;
    }
  }
});

/*
type: 'DEFAULT',
content: 'vtest',
author:
 User {
   id: '221744875941396480',
   username: '� SharkFin �',
   discriminator: '2790',
   avatar: 'cd7e62888a4f576360e332f047327481',
   bot: false,
   lastMessageID: '372882873562431490',
   lastMessage: [Circular] },
member:
 GuildMember {
   guild:
    Guild {
      members: [Object],
      channels: [Object],
      roles: [Object],
      presences: [Object],
      available: true,
      id: '261606415905325056',
      name: 'The Gilgerian FR',
      icon: 'd750cd7d7390925e6f2bd756698f5d70',
      splash: null,
      region: 'us-east',
      memberCount: 215,
      large: false,
      features: [],
      applicationID: null,
      afkTimeout: 300,
      afkChannelID: '265584540028895232',
      systemChannelID: null,
      embedEnabled: undefined,
      verificationLevel: 1,
      explicitContentFilter: 0,
      joinedTimestamp: 1507944467939,
      ownerID: '217031866778124289',
      _rawVoiceStates: [Object],
      emojis: [Object] },
   user:
    User {
      id: '221744875941396480',
      username: '� SharkFin �',
      discriminator: '2790',
      avatar: 'cd7e62888a4f576360e332f047327481',
      bot: false,
      lastMessageID: '372882873562431490',
      lastMessage: [Circular] },
   _roles:
    [ '276152124319072256',
      '277099852859441152',
      '269891807263850498',
      '282952206800519169',
      '287666679708909568',
      '287665350298828801',
      '364522952538062848',
      '307478479467970560',
      '364125087785549836',
      '307913569029324801',
      '358405743948595221',
      '287677748758183957',
      '307925453560217600' ],
   serverDeaf: false,
   serverMute: false,
   selfMute: false,
   selfDeaf: false,
   voiceSessionID: '1596dc97f5aa9fec8a207e95a28f5109',
   voiceChannelID: '369205160007696394',
   speaking: false,
   nickname: 'PM SharkFin, SP Leader',
   joinedTimestamp: 1498837082030,
   lastMessageID: '372882873562431490',
   lastMessage: [Circular] },
pinned: false,
tts: false,
nonce: '372882855790903296',
system: false,
embeds: [],
attachments: Collection {},
createdTimestamp: 1508972604886,
editedTimestamp: null,
reactions: Collection {},
mentions:
 MessageMentions {
   everyone: false,
   users: Collection {},
   roles: Collection {},
   _content: 'vtest',
   _client:
    Client {
      domain: null,
      _events: [Object],
      _eventsCount: 4,
      _maxListeners: 10,
      options: [Object],
      rest: [Object],
      dataManager: [Object],
      manager: [Object],
      ws: [Object],
      resolver: [Object],
      actions: [Object],
      voice: [Object],
      shard: null,
      users: [Object],
      guilds: [Object],
      channels: [Object],
      presences: Collection {},
      user: [Object],
      readyAt: 2017-10-25T23:03:19.046Z,
      broadcasts: [],
      pings: [Object],
      _timeouts: [Object],
      _intervals: [Object] },
   _guild:
    Guild {
      members: [Object],
      channels: [Object],
      roles: [Object],
      presences: [Object],
      available: true,
      id: '261606415905325056',
      name: 'The Gilgerian FR',
      icon: 'd750cd7d7390925e6f2bd756698f5d70',
      splash: null,
      region: 'us-east',
      memberCount: 215,
      large: false,
      features: [],
      applicationID: null,
      afkTimeout: 300,
      afkChannelID: '265584540028895232',
      systemChannelID: null,
      embedEnabled: undefined,
      verificationLevel: 1,
      explicitContentFilter: 0,
      joinedTimestamp: 1507944467939,
      ownerID: '217031866778124289',
      _rawVoiceStates: [Object],
      emojis: [Object] },
   _members: null,
   _channels: null },
webhookID: null,
hit: null,
_edits: [] }
*/
