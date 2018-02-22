exports.run = (message) => {
  // Create economy folder if doesnt exist
  if(!fs.existsSync('./commands/economy')) {
    fs.mkdirSync('./commands/economy');
  }

  let date = new Date();

  let time;

  // Create user file if doesn't exist

  //${`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getTime()}`}
  if(!fs.existsSync(`./commands/economy/${message.author.id}.txt`)) {
    fs.appendFile(`./commands/economy/${message.author.id}.txt`, `{"credits": 1250, "last_daily": ${date.getTime()}}`, (err) => {if(err){console.log('There was an error creating a file'.red)} });
    channel.send(`:inbox_tray: | **${user}**, You have collected your **250** daily credits.`);
  } else if (JSON.parse(fs.readFileSync(`./commands/economy/${message.author.id}.txt`, 'utf-8')).last_daily == '') {
    file = JSON.parse(fs.readFileSync(`./commands/economy/${message.author.id}.txt`, 'utf-8'));
    file.last_daily = date.getTime();
    file.credits+=250;
    fs.writeFile(`./commands/economy/${message.author.id}.txt`, JSON.stringify(file), (err) => {if(err){console.log('There was an error writing to a file'.red)} });
    channel.send(`:inbox_tray: | **${user}**, You have collected your **250** daily credits.`);
  } else {
    time = JSON.parse(fs.readFileSync(`./commands/economy/${message.author.id}.txt`, 'utf-8')).last_daily;

    if (time <= (date.getTime())-86400000) {
      file = JSON.parse(fs.readFileSync(`./commands/economy/${message.author.id}.txt`, 'utf-8'));
      file.last_daily = date.getTime();
      file.credits+=250;
      fs.writeFile(`./commands/economy/${message.author.id}.txt`, JSON.stringify(file), (err) => {if(err){console.log('There was an error writing to a file'.red)} });
      channel.send(`:inbox_tray: | **${user}**, You have collected your **250** daily credits.`);
    } else {
      let timeleft = 86400000 - ((date.getTime()) - time);
      channel.send(`:inbox_tray: | **${user}**, You cannot collect your daily credits yet. Please wait **${Math.floor((timeleft/(1000*60*60))%24)}h ${Math.floor((timeleft/(1000*60))%60)}m ${Math.floor((timeleft/1000)%60)}s**.`);
    }
  }
}
