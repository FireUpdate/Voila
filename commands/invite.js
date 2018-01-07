let invite = "https://discordapp.com/oauth2/authorize?client_id=368115108641112064&scope=bot&permissions=195656";

exports.run = (message) => {
  channel.send("Here is my invite link! **"+invite+"**");
}
