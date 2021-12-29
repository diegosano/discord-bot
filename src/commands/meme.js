const { SlashCommandBuilder } = require('@discordjs/builders');
const logger = require('../services/logger');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('Responde com uma frase meme referente a pessoa que você passar!'),
	execute: async ({event, name}) => {
    if (!event || !name) return;
		let phrase;

		switch (name) {
			case 'mauricio':
			case 'maumau':
				phrase = 'CALA BOCA LÉO';
				break;

      case 'douglas':
      case 'magichands':
      case 'douglitas':
        phrase = 'To aqui de boa, jogando beach tênis e tomando cerveja artesanal no copo da Stanley!';
        break;

      case 'tempo':
      case 'clima':
        phrase = 'Tempo bom pra uma chuvinha vim assim em cima em!';
        break;

      default:
        phrase = 'Ops, nome não encontrado.';
		}
		
		await event.reply(phrase);
	},
};
