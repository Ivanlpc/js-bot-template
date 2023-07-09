const { SlashCommandBuilder } = require('discord.js')
const command = require('../../config.json').commands.license
const productList = require('../../packages.json')

const products = () => {
  const products = []
  for (const product in productList) {
    products.push({
      name: productList[product].name,
      value: productList[product].time
    })
  }
  return products
}

module.exports = {
  cooldown: command.cooldown || 0,
  enabled: command.enabled,
  data: new SlashCommandBuilder()
    .setName(command.name)
    .setDescription(command.description)
    .addSubcommand(cmd => cmd
      .setName(command.subcommands.add.name)
      .setDescription(command.subcommands.add.description)
      .addUserOption(option => option
        .setName(command.subcommands.add.args.id.name)
        .setDescription(command.subcommands.add.args.id.description)
        .setRequired(true))
      .addStringOption(option => option
        .setName(command.subcommands.add.args.time.name)
        .setDescription(command.subcommands.add.args.time.description)
        .addChoices(...products())
        .setRequired(true)))
    .addSubcommand(cmd => cmd
      .setName(command.subcommands.remove.name)
      .setDescription(command.subcommands.remove.description)
      .addStringOption(option => option
        .setName(command.subcommands.remove.args.id.name)
        .setDescription(command.subcommands.remove.args.id.description)
        .setAutocomplete(true)
        .setRequired(true)))
    .addSubcommand(cmd => cmd
      .setName(command.subcommands.list.name)
      .setDescription(command.subcommands.list.description))
    .addSubcommand(cmd => cmd
      .setName(command.subcommands.reload.name)
      .setDescription(command.subcommands.reload.description)),
  async execute (interaction) {
    if (interaction.options.getSubcommand() === command.subcommands.add.name) {
      if (interaction.user.id !== interaction.guild.ownerId) {
        // checkPerms
      }
    }
    if (interaction.options.getSubcommand() === command.subcommands.remove.name) {
      //
    }
    if (interaction.options.getSubcommand() === command.subcommands.list.name) {
      //
    }
    if (interaction.options.getSubcommand() === command.subcommands.reload.name) {
      //
    }
    interaction.reply({
      content: 'Hello!',
      ephemeral: true
    })
  },
  async autocomplete (interaction) {
    const focusedValue = interaction.options.getFocused()
    const choices = interaction.client.activeLicenses
    const filtered = choices.filter(choice => choice.name.startsWith(focusedValue))
    await interaction.respond(filtered)
  }
}
