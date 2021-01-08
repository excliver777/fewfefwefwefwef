const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "To add/invite the bot to your server",
    usage: "[invite]",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(``)
    .setURL(``)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};
