const { REST, Routes } = require('discord.js')
const { CLIENT_ID, GUILD_ID, TOKEN } = require('./config.json')
const Logger = require('./util/Logger')

const rest = new REST().setToken(TOKEN)

class CommandManager {
  static async registerCommands (commands) {
    try {
      Logger.info('Started commands register...')
      const data = await rest.put(
        Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
        { body: commands })
      Logger.info(`Registered ${data.length} commands`)
    } catch (error) {
      Logger.error(error)
    }
  }
}

module.exports = CommandManager
