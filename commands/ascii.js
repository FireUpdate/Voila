exports.run = (bot, message, args, channel, user, usericon, userid, ownerid, prefix) => {
  const figlet = require('figlet');
  
  console.log(user.cyan+": ".cyan+message.content.white);
  var max = 15;
  var text = "";
  var ascii = "";
  for(i=0;i<args.length;i++) {
    if (args[i+1] != undefined && (text.length+args[i].length+args[i+1].length) >= max) {
      text+=args[i]+" \n";
      max+=15;
    } else {
      text+=args[i]+" ";
    }
  }

  figlet.text(text, {
      font: 'Big',
      horizontalLayout: 'default',
      verticalLayout: 'default'
  }, function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      channel.send("```"+data+"```");
  });
  message.delete(100);
}
