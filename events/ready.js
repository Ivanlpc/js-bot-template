const { Events } = require('discord.js')
const Logger = require('../util/Logger')
const CommandManager = require('../CommandManager')

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute (client) {
    CommandManager.registerCommands(client.commands_json)
    Logger.info(`Ready! Logged in as ${client.user.tag}`)
  }
}
