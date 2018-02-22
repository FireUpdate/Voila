exports.run = (message) => {
  // Create economy folder if doesnt exist
  if(!fs.existsSync('./commands/economy')) {
    fs.mkdirSync('./commands/economy');
  }

  let paid = message.mentions.users.first();

  let credits = parseInt(args[1]);

  // Create user file if doesn't exist

  if(!fs.existsSync(`./commands/economy/${message.author.id}.txt`)) {
    if (credits <= 5000 && credits >= 1) {
      if (credits <= 1000) {
        fs.appendFile(`./commands/economy/${message.author.id}.txt`, `{"credits": ${1000-credits}, "last_daily": ""}`, (err) => {if(err){console.log('There was an error creating a file'.red)} });
        if(!fs.existsSync(`./commands/economy/${paid.id}.txt`)) {
          fs.appendFile(`./commands/economy/${paid.id}.txt`, `{"credits": ${1000+credits}, "last_daily": ""}`, (err) => {if(err){console.log('There was an error creating a file'.red)} });
        } else {
          file = JSON.parse(fs.readFileSync(`./commands/economy/${paid.id}.txt`, 'utf-8'));
          file.credits+=credits;
          fs.writeFile(`./commands/economy/${paid.id}.txt`, JSON.stringify(file), (err) => {if(err){console.log('There was an error writing to a file'.red)} });
        }
        channel.send(`:outbox_tray: | **${user}**, You have paid **${paid.username}**, **${credits}** credits.`);
      } else {
        channel.send(`:outbox_tray: | **${user}**, You do not have enough credits.`);
      }
    } else {
      channel.send(`:outbox_tray: | **${user}**, You can only pay **1 - 5000** credits at a time.`);
    }
  } else {
    if (credits <= 5000 && credits >= 1) {
      if (credits <= JSON.parse(fs.readFileSync(`./commands/economy/${message.author.id}.txt`, 'utf-8')).credits) {
        if(!fs.existsSync(`./commands/economy/${paid.id}.txt`)) {
          fs.appendFile(`./commands/economy/${paid.id}.txt`, `{"credits": ${1000+credits}, "last_daily": ""}`, (err) => {if(err){console.log('There was an error creating a file'.red)} });
        } else {
          file = JSON.parse(fs.readFileSync(`./commands/economy/${paid.id}.txt`, 'utf-8'));
          file.credits+=credits;
          fs.writeFile(`./commands/economy/${paid.id}.txt`, JSON.stringify(file), (err) => {if(err){console.log('There was an error writing to a file'.red)} });
        }

        file = JSON.parse(fs.readFileSync(`./commands/economy/${message.author.id}.txt`, 'utf-8'));
        file.credits-=credits;
        fs.writeFile(`./commands/economy/${message.author.id}.txt`, JSON.stringify(file), (err) => {if(err){console.log('There was an error writing to a file'.red)} });

        channel.send(`:outbox_tray: | **${user}**, You have paid **${paid.username}**, **${credits}** credits.`);
      } else {
        channel.send(`:outbox_tray: | **${user}**, You do not have enough credits.`);
      }
    } else {
      channel.send(`:outbox_tray: | **${user}**, You can only pay **1 - 5000** credits at a time.`);
    }
  }
}
