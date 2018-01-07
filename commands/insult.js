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

exports.run = (message) => {
  if (args[0] == bot.id) {
    channel.send(":rage: | You motherfucker...");
  } else if (args[0] != undefined && args[0].substring(0, 2) == "<@") {
    channel.send(":laughing: | "+args[0]+", "+insult[Math.round(Math.random() * insult.length)]);
  }
}
