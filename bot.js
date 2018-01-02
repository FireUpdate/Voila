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
  }
});
