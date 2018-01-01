const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');
const pack = require('./package.json');
const fs = require('fs');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

var prefix = 'v';

defaultgame = prefix+"help"

var voilalog = '\n      ██╗   ██╗ ██████╗ ██╗██╗      █████╗ ██╗\n      ██║   ██║██╔═══██╗██║██║     ██╔══██╗██║\n      ██║   ██║██║   ██║██║██║     ███████║██║\n      ╚██╗ ██╔╝██║   ██║██║██║     ██╔══██║╚═╝\n       ╚████╔╝ ╚██████╔╝██║███████╗██║  ██║██╗\n        ╚═══╝   ╚═════╝ ╚═╝╚══════╝╚═╝  ╚═╝╚═╝';

bot.on('ready', function (evt) {
  console.log(voilalog);
  console.log('      '+pack.description);
  console.log('      Logged in as: '+bot.username + ' - <@' + bot.id + '>');
  console.log('      Prefix: '+prefix)
  console.log('      Set game to: '+defaultgame);
  console.log('      All bot interactions are logged below!');
  console.log('-------------------------------------------------------------\n');
  bot.setPresence({
    game:{
      name: defaultgame
    }
  });
});

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

function react(cID, mID, num) {
  switch (num) {
    case 1:
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[2]})},200*5-500);
    break;
    case 2:
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[2]})},200*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[3]})},300*5-500);
    break;
    case 3:
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[2]})},200*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[3]})},300*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[4]})},400*5-500);
    break;
    case 4:
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[2]})},200*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[3]})},300*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[4]})},400*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[5]})},500*5-500);
    break;
    case 5:
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[2]})},200*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[3]})},300*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[4]})},400*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[5]})},500*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[6]})},600*5-500);
    break;
    case 6:
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[2]})},200*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[3]})},300*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[4]})},400*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[5]})},500*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[6]})},600*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[7]})},700*5-500);
    break;
    case 7:
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[2]})},200*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[3]})},300*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[4]})},400*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[5]})},500*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[6]})},600*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[7]})},700*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[8]})},800*5-500);
    break;
    case 8:
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[2]})},200*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[3]})},300*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[4]})},400*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[5]})},500*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[6]})},600*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[7]})},700*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[8]})},800*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[9]})},900*5-500);
    break;
    case 9:
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[2]})},200*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[3]})},300*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[4]})},400*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[5]})},500*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[6]})},600*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[7]})},700*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[8]})},800*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[9]})},900*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[10]})},1000*5-500);
    break;
    case 10:
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[2]})},200*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[3]})},300*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[4]})},400*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[5]})},500*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[6]})},600*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[7]})},700*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[8]})},800*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[9]})},900*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[10]})},1000*5-500);
      setTimeout(function(){bot.addReaction({channelID: cID, messageID: mID, reaction: reactions[11]})},1100*5-500);
    break;
  };
}

// My Variables
// bot.deleteMessage({channelID: channelID,messageID: evt.d.id});
var reactions = ["#⃣", "0⃣", "1⃣", "2⃣", "3⃣", "4⃣", "5⃣", "6⃣", "7⃣", "8⃣", "9⃣", "🔟"];

var botid = "<@"+"368115108641112064"+">";
var botid2 = "368115108641112064";
var ownerid= pack.ownerid;

var Coin = ["Heads", "Tails"];

var helpmsg = "**Use the "+prefix+" as the prefix!**\n\n**Owner Only Commands**\n\n - `"+prefix+"eval input` *Enter a javascript command*\n - `"+prefix+"send #channel message` *Send a message to a channel*\n - `"+prefix+"shutdown` *Shuts the bot down*\n\n**User Commands**\n\n - `"+prefix+"help` *Open this help menu*\n - `"+prefix+"donger` *Bring that spicy memeness into the conversation*\n - `"+prefix+"flip [none / table / bird]` *Flips things*\n - `"+prefix+"random low_num high_num` *Generates a random number between two specified values*\n - `"+prefix+"smack @user` *Smacks somebody*\n - `"+prefix+"binary message` *Convert test to binary*\n - `"+prefix+"channelid` *Get the id of a channel*\n - `"+prefix+"insult user` *Throws an insult at a user*\n - `"+prefix+"poll question, op 1, op 2 ` *Creates a poll. 10 max options.*\n - `"+prefix+"invite` *Send the invite link into chat*\n - `"+prefix+"creator` *Link to the Creators discord. Also my creators home! :3*";

var donger = ["( ͡^ ͜ʖ ͡^)", "(ﾉಠ_ಠ)ﾉ", "⋛⋋( ՞ਊ ՞)⋌⋚", "ヽ༼ ຈل͜ຈ༼ ຈل͜ຈ༽ຈل͜ຈ ༽ﾉ", "┬┴┬┴┤ ༼ຈل͜├┬┴┬┴", "♪ ಠ⌣ಠ", "୧༼ಠ益ರೃ༽୨", "༼ ºل͟º༼ ºل͟º༽ºل͟º ༽", "ᘳ◕ᴥ◕ᘰ", "O͡͡͡͡͡͡͡͡͡͡͡͡͡͡╮༼;´༎ຶ.̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̨̨̨̨̨̨̨̨̨̨̨̨.̸̸̨̨۝ ༎ຶ༽╭o͡͡͡͡͡͡͡͡͡͡͡͡͡͡", "Ѱζ༼ᴼل͜ᴼ༽ᶘѰ", "ɳ༼ຈل͜ຈ༽", "୧༼ಠ益ಠ༽୨", "/╲/\╭( ͡° ͡° ͜ʖ ͡° ͡°)╮/\╱\ ", "ᕦ( ͡°╭͜ʖ╮͡° )ᕤ"];

var invite = "https://discordapp.com/oauth2/authorize?&client_id=368115108641112064&scope=bot&permissions=8"

var insult = [
  "is such an idiot, that he eats fucking desks for a meal. Grow up and eat normal food like bricks. That idiot.",
  "is so fucking fat, people who walk by.. wait I was going to say they call for a taxi, but they get caught in his fat before they can say anything.",
  "can go fuck his mother like he grew up doing.",
  "sucks some serious bumbum.",
  "Die. just die. Please.",
  "is so fucking gay, that he cant even put a dick in his but. He always has a furry tail butplug up their ass.",
  "can only get an erection from watching some furry shit. IDK how about brony on brony action.",
  "cooks babies. Mostly furrys though. So I guess he is helping out the comunity. Oh wait, he's a furry too."];

var pollreact = 0;

bot.on('message', function (user, userID, channelID, message, evt) {
  if (userID == botid2) {
    console.log(user+": "+message+"\n");
    if (pollreact > 0) {
      react(channelID, evt.d.id, pollreact);
      pollreact = 0;
    }
  }
  if (message == "Here is your link! **"+invite+"**") {
    setTimeout(function(){bot.deleteMessage({channelID: channelID,messageID: evt.d.id})}, 3000);
  }
  if (message.substring(0, 1) == prefix) {
    console.log(user+": "+message)
    var args = message.substring(1).split(' ');
    var cmd = args[0].toLowerCase();

    args = args.splice(1);
    switch(cmd) {

        case "send":
          if (userID == ownerid) {
            bot.deleteMessage({channelID: channelID,messageID: evt.d.id});
            if (args[0] != undefined && args[0].substring(0, 2) == "<#") {
              var msg = "";
              for(i=1;i<args.length;i++) {
                msg += args[i]+" "
              }
              bot.sendMessage({
                to: args[0].substring(2, args[0].length-1),
                message: msg
              });
            } else {
              bot.sendMessage({
                to: channelID,
                message: "Not a valid channel!"
              });
            }
          } else {
            bot.sendMessage({
              to: channelID,
              message: "You do not have access to use this command"
            });
          }
        break;

        case "shutdown":
          if (userID == ownerid) {
            bot.sendMessage({
              to: channelID,
              message: "Shutting Down..."
            });

            bot.deleteMessage({channelID: channelID,messageID: evt.d.id});
            setTimeout(function() {bot.exit();},500);
          } else {
            bot.sendMessage({
              to: channelID,
              message: "You do not have access to use this command"
            });
          }
        break;

        case "eval":
          if (userID == ownerid) {
            try {
              var cmd = "";
              for(i=0;i<args.length;i++) {
                cmd+=args[i]+" ";
              }

              bot.sendMessage({
                to: channelID,
                embed: {
                  title: "Evaluation",
                  color: 3447003,
                  description: ":inbox_tray: **Input:**\n```"+cmd+"```\n\n :outbox_tray: **Output:**\n```"+eval(cmd)+"``` ",
                  footer: {
                    text: ''+prefix+'eval'
                  }
                }
              });
            } catch (error) {
              bot.sendMessage({
                to: channelID,
                message: "That eval statement had an error in it!"
              });
            }
          } else {
            bot.sendMessage({
              to: channelID,
              message: "You do not have access to use this command"
            });
          }
        break;

        case "help":
          bot.sendMessage({
            to: channelID,
            message: ":inbox_tray: **| "+user+",** the help menu has been sent to your PMs"
          });
          bot.sendMessage({
            to: userID,
            embed: {
              title: "Voila Help Menu",
              color: 3447003,
              description: "```"+voilalog+"```\n\n"+helpmsg,
              footer: {
                text: ''+prefix+'help'
              }
            }
          });
        break;

        case "creator":
          bot.sendMessage({
            to: channelID,
            message: "Join my home guild! It is home to people who love to create! 3D models, programming, music, or just have good ideas, come join! My creator lives here too! https://discord.gg/yrJ9mQ9"
          });
          setTimeout(function(){bot.deleteMessage({channelID: channelID,messageID: evt.d.id})},100);
        break;

        case "poll":
          var word = "";
          var options = "";
          for(i=0;i<args.length;i++) {
            word+=args[i]+" ";
          }
          if (word.split(/,/).length <= 11) {
            for(i=1;i<word.split(/,/).length;i++) {
              if (word.split(/,/)[i] != " " && word.split(/,/)[i] != "") {
                options+="**"+optionfinder(i,word)+"**"+"\n";
              }
            }
            bot.sendMessage({
              to: channelID,
              embed: {
                title: word.split(/,/)[0],
                color: 3447003,
                description: options,
                footer: {
                  text: ''+prefix+'poll'
                },
              }
            });
            pollreact = word.split(/,/).length - 1;
          } else {
            bot.sendMessage({
              to: channelID,
              message: "Too many options! There can only be a maximum of 10."
            });
          }
        break;

        case "invite":
          bot.sendMessage({
            to: channelID,
            message: "Here is your link! **"+invite+"**"
          });
          setTimeout(function(){bot.deleteMessage({channelID: channelID,messageID: evt.d.id})}, 3000);
        break;

        case "donger":
          bot.sendMessage({
            to: channelID,
            message: donger[Math.round(Math.random() * donger.length)]
          });
          bot.deleteMessage({channelID: channelID,messageID: evt.d.id});
        break;

        case "insult":
          if (args[0] == botid) {
            bot.sendMessage({
              to: channelID,
              message: ":rage: | You motherfucker..."
            });
          } else if (args[0] != undefined && args[0].substring(0, 2) == "<@") {
            bot.sendMessage({
              to: channelID,
              message: ":laughing: | "+args[0]+", "+insult[Math.round(Math.random() * insult.length)]
            });
          } else {
            bot.sendMessage({
              to: channelID,
              message: ":laughing: | **"+user+"** just yelled some curse or some shit at the air because they are fucking retarted."
            });
          }
        break;

        case 'flip':
        if (args[0] == undefined) {
          bot.sendMessage({
            to: channelID,
            message: "And it's "+Coin[Math.round(Math.random())]+"!!"
          });
        } else if (args[0].toLowerCase() == "table") {
            bot.sendMessage({
              to: channelID,
              message: "(╯°□°)╯︵ ┻━┻"
            });
          } else if (args[0].toLowerCase() == "bird") {
            bot.sendMessage({
              to: channelID,
              message: "( ° ͜ °)╭∩╮"
            });
          }
        break;

        case 'random':
          if (args[1] == undefined) {
            bot.sendMessage({
              to: channelID,
              message: "Please choose a number to begin, and end with. '"+prefix+"random 5 13'"
            });
          } else if (args[0] != undefined && args[1] != undefined) {
            var min = parseInt(args[0])
            var max = parseInt(args[1])
            bot.sendMessage({
              to: channelID,
              message: Math.round(Math.random() * (max - min) + min)
            });
          }
        break;

        case "smack":
          if (args[0] == "@everyone") {
            bot.sendMessage({
              to: channelID,
              message: ":hand_splayed: | Somehow, **"+user+"** just smacked every single one of you idiots. **lol.**"
            });
          } else if (args[0] == botid) {
            bot.sendMessage({
              to: channelID,
              message: ":hand_splayed: | **Voila!** just smacked **<@"+userID+">**!"
            });
          } else if (args[0] != undefined && args[0].substring(0, 2) == "<@") {
            bot.sendMessage({
              to: channelID,
              message: ":hand_splayed: | **"+user+"** just smacked **"+args[0]+"**!"
            });
          } else {
            bot.sendMessage({
              to: channelID,
              message: ":hand_splayed: | **"+user+"** just smacked... Wait what?... Aparently "+user+" just smacked the air? Why is this news? `distant yelling` 'Whoever did this I want fired! NOW!!'"
            });
          }
        break;

        case "binary":
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

          bot.sendMessage({
            to: channelID,
            message: "Here is your binary translation!: **"+binary+"**"
          });
        break;

        case "channelid":
          bot.sendMessage({
            to: channelID,
            message: channelID
          });
        break;

        default:
          logger.info(user + ", tried to use an invalid command!\n");
        break;
     }
   }
});
