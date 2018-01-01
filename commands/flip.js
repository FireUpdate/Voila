exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  var Coin = ["Heads", "Tails"];
  
  console.log(user.cyan+": ".cyan+message.content.white);
  if (args[0] == undefined) {
    channel.send("And it's "+Coin[Math.round(Math.random())]+"!!");
  } else if (args[0].toLowerCase() == "table") {
    channel.send("(╯°□°)╯︵ ┻━┻");
  } else if (args[0].toLowerCase() == "bird") {
    channel.send("( ° ͜ °)╭∩╮");
  }
}
