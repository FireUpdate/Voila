const Coin = [
  "Heads",
  "Tails"];

exports.run = (message) => {
  channel.send("And it's `"+Coin[Math.round(Math.random())]+"`!!");
}
