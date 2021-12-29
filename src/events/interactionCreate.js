const logger = require('../services/logger');

module.exports = {
	name: 'interactionCreate',
	execute: async (interaction) => {
		if (!interaction.isCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) return;

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'Ocorreu um erro ao executar este comando!', ephemeral: true });
		}
	},
};