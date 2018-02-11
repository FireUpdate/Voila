exports.run = (message) => {
  if (args[0] == "@everyone") {
    channel.send(":hand_splayed: | Somehow, **"+user+",** just smacked everyone!");
  } else if (args[0] != undefined && args[0].substring(0, 2) == "<@") {
    channel.send(":hand_splayed: | **"+user+",** just smacked **"+message.mentions.users.first().username+"**!");
  }
}
