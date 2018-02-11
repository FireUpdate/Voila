exports.run = (message) => {
  let max = 15;
  let text = "";
  let ascii = "";
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
  message.delete(10);
}
