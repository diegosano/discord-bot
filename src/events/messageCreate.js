const prefix = '!';
const logger = require('../services/logger');

module.exports = {
	name: 'messageCreate',
	execute: async (event) => {
    if (event.author.bot) return;
    if (!event.content.startsWith(prefix)) return;

    const commandBody = event.content.slice(prefix.length).toLowerCase();
    const [commandName, name] = commandBody.split(' ');
		const command = event.client.commands.get(commandName);

		if (!command) return;

		try {
			await command.execute({event, name});
		} catch (error) {
			logger.error(error);
			await event.reply({ content: 'Ocorreu um erro ao executar este comando!', ephemeral: true });
		}
	},
};