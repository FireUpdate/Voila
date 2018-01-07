exports.run = (message) => {
  if (args[1] == undefined) {
    channel.send("Please choose a number to begin, and end with. '"+prefix+"random 5 13'");
  } else if (args[0] != undefined && args[1] != undefined) {
    let min = parseInt(args[0])
    let max = parseInt(args[1])
    channel.send(Math.round(Math.random() * (max - min) + min));
  }
}
