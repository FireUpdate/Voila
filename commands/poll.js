exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
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

  var pollreact = 0;
  var poll = 0;

  var reactions = ["#⃣", "0⃣", "1⃣", "2⃣", "3⃣", "4⃣", "5⃣", "6⃣", "7⃣", "8⃣", "9⃣", "🔟"];

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
}