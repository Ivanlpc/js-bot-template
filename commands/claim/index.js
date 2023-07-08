const { SlashCommandBuilder } = require('discord.js')
const command = require('../../config.json').commands.claim

module.exports = {
  cooldown: command.cooldown || 0,
  enabled: command.enabled,
  data: new SlashCommandBuilder()
    .setName(command.name)
    .setDescription(command.description),
  async execute (interaction) {
    if (interaction.user.id !== interaction.guild.ownerId) {
      // checkPerms
    }
    interaction.reply({
      content: 'Hello'
    })
  }
}
