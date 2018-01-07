const ballresp = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt!',
  'Yes definitely.',
  'You may rely on it.',
  'As I see it, yes!',
  'Most likely',
  'Outlook good',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'];

exports.run = (message) => {
  let ball = '';
  for (i=0;i<args.length;i++) {
    ball+=args[i]+' ';
  }
  channel.send({embed: {
    color: embedColor,
    title: "8ball \n",
    author: {
      name: user,
      icon_url: usericon
    },
    description: "Your question: **"+ball+"** \n\n**:8ball: | "+ballresp[Math.floor(Math.random() * ballresp.length)]+"**",
    footer: {
      icon_url: bot.user.avatarURL,
      text: prefix+"8ball | From "+user
    }
  }});
  message.delete(10);
}
