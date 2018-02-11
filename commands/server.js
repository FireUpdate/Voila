exports.run = (message) => {
  channel.send({
    embed: {
      color: embedColor,
      title: "Server Info\n",
      thumbnail: {
        url: message.guild.iconURL
      },
      fields: [
        {
          name: 'Name',
          value: `${message.guild.name}`,
          inline: true
        },
        {
          name: 'Region',
          value: `${message.guild.region}`,
          inline: true
        },
        {
          name: 'Owner',
          value: `${message.guild.owner.user.tag}`,
          inline: true
        },
        {
          name: 'Server ID',
          value: `${message.guild.id}`,
          inline: true
        },
        {
          name: 'Roles',
          value: `${message.guild.roles.size}`,
          inline: true
        },
        {
          name: 'Text Channels',
          value: message.guild.channels.filter(c => c.type === 'text').size,
          inline: true
        },
        {
          name: 'Voice Channels',
          value: message.guild.channels.filter(c => c.type === 'voice').size,
          inline: true
        },
        {
          name: 'Categories',
          value: message.guild.channels.filter(c => c.type !== 'voice' && c.type !== 'dm' && c.type !== 'group' && c.type !== 'text' && c.type !== 'unknown').size,
          inline: true
        },
        {
          name: 'Custom Emojis',
          value: message.guild.emojis.size,
          inline: true
        },
        {
          name: 'Members',
          value: `Users: ${channel.guild.members.filter(m => m.user.bot == false).size} \nBots: ${channel.guild.members.filter(m => m.user.bot == true).size}`,
          inline: true
        }
      ],
      footer: {
        text: prefix+'server'
      }
    }
  })
}
