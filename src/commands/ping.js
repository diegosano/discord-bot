const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Responde com pong!'),
	execute: async (interaction) => {
		await interaction.reply('pong!');
	},
};
