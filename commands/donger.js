exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  var donger = ["( ͡^ ͜ʖ ͡^)", "(ﾉಠ_ಠ)ﾉ", "⋛⋋( ՞ਊ ՞)⋌⋚", "ヽ༼ ຈل͜ຈ༼ ຈل͜ຈ༽ຈل͜ຈ ༽ﾉ", "┬┴┬┴┤ ༼ຈل͜├┬┴┬┴", "♪ ಠ⌣ಠ", "୧༼ಠ益ರೃ༽୨", "༼ ºل͟º༼ ºل͟º༽ºل͟º ༽", "ᘳ◕ᴥ◕ᘰ", "O͡͡͡͡͡͡͡͡͡͡͡͡͡͡╮༼;´༎ຶ.̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̸̨̨̨̨̨̨̨̨̨̨̨̨.̸̸̨̨۝ ༎ຶ༽╭o͡͡͡͡͡͡͡͡͡͡͡͡͡͡", "Ѱζ༼ᴼل͜ᴼ༽ᶘѰ", "ɳ༼ຈل͜ຈ༽", "୧༼ಠ益ಠ༽୨", "/╲/\╭( ͡° ͡° ͜ʖ ͡° ͡°)╮/\╱\ ", "ᕦ( ͡°╭͜ʖ╮͡° )ᕤ"];

  console.log(user.cyan+": ".cyan+message.content.white);
  channel.send(donger[Math.round(Math.random() * donger.length)]);
  message.delete(100);
}
