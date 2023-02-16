const { SlashCommandBuilder } = require('discord.js');

let getMoonData = require("../fetch-moon.js");

let emoji, cycle;

(async() => {
    let moonData = await getMoonData();
    let { cycle_progress, state } = moonData.moon;
    cycle = cycle_progress;

    if (state === 'NEW') {
        emoji = "\uD83C\uDF11";
    } else if (state === 'WAXING_CRESCENT') {
        emoji = "\uD83C\uDF12";
    } else if (state === 'FIRST_QUARTER') {
        emoji = "\uD83C\uDF13";
    } else if (state === 'WAXING_GIBBOUS') {
        emoji = "\uD83C\uDF14";
    } else if (state === 'FULL') {
        emoji = "\uD83C\uDF15";
    } else if (state === 'WANING_GIBBOUS') {
        emoji = "\uD83C\uDF16";
    } else if (state === 'THIRD_QUARTER') {
        emoji = "\uD83C\uDF17";
    } else if (state === "WANING_CRESCENT") {
        emoji = "\uD83C\uDF18";
    }
})();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('moon')
        .setDescription('Gives information about the current moon phase.'),
    async execute(interaction) {
        await interaction.reply(`${emoji} | The moon is currently ${cycle} through its cycle.`);
    },
};