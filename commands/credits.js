exports.run = (message) => {
  // Create economy folder if doesnt exist
  if(!fs.existsSync('./commands/economy')) {
    fs.mkdirSync('./commands/economy');
  }

  let date = new Date();

  let credits;

  let person;

  if (message.mentions.users.first()) {
    person = message.mentions.users.first();

    if(!fs.existsSync(`./commands/economy/${person.id}.txt`)) {
      fs.appendFile(`./commands/economy/${person.id}.txt`, `{"credits": 1000, "last_daily": ""}`, (err) => {if(err){console.log('There was an error creating a file'.red)} })
      channel.send(`:moneybag: | **${person.username}**, You have **1000** credit(s).`);
    } else {
      credits = fs.readFileSync(`./commands/economy/${person.id}.txt`, 'utf-8');
      channel.send(`:moneybag: | **${user}**, **${person.username}** has **${JSON.parse(credits).credits}** credit(s).`);
    }
  }else {
    if(!fs.existsSync(`./commands/economy/${message.author.id}.txt`)) {
      fs.appendFile(`./commands/economy/${message.author.id}.txt`, `{"credits": 1000, "last_daily": ""}`, (err) => {if(err){console.log('There was an error creating a file'.red)} })
      channel.send(`:moneybag: | **${user}**, You have **1000** credit(s).`);
    } else {
      credits = fs.readFileSync(`./commands/economy/${message.author.id}.txt`, 'utf-8');
      channel.send(`:moneybag: | **${user}**, You have **${JSON.parse(credits).credits}** credit(s).`);
    }
  }

}
