exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
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
}
