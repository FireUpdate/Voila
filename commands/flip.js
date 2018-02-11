const Coin = [
  "Heads",
  "Tails"];

exports.run = (message) => {
  channel.send("You flipped `"+Coin[Math.round(Math.random())]+"`!");
  message.delete(10);
}
