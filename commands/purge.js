exports.run = (message) => {
  try {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      if (!isNaN(parseInt(args[0]))) {
        if (parseInt(args[0]) < 100) {
          channel.bulkDelete(parseInt(args[0])+1);
          channel.send(`**Deleted ${parseInt(args[0])} messages!**`).then(msg => msg.delete(5000));
        } else if (parseInt(args[0]) == 100) {
          channel.bulkDelete(parseInt(args[0]));
          channel.send(`**Deleted ${parseInt(args[0])} messages!**`).then(msg => msg.delete(5000));
        } else {
          channel.send('Maximum of 100 messsages can be purged at a time.')
        }
      } else {
        channel.send('Please specify a value!')
      }
    } else {
      channel.send("You need the `manage messages` permission!");
    }
  catch(err) {
    channel.send('I do not have access to delete messages.');
  }
}
