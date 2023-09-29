const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('checkrole')
        .setDescription('Lists users with a given role.')
        .addRoleOption(option =>
            option.setName('role')
                .setDescription('The role for the user list query.')
                .setRequired(true)),
    async execute(interaction) {
        const searchrole = interaction.options.getRole('role');
        const guild = interaction.guild;
        await guild.members.fetch();
        const uids = searchrole.members.map(m => m.id).join('\n');
        const filename = `${guild.name}_${searchrole.name}UIDs.csv`;
        const filepath = `/tmp/${filename}`;
        fs.writeFile(filepath, uids, err => {
            if (err) {
                console.error(err);
            }
        });
        await interaction.reply({ content: `UIDs with ${searchrole.name}:`, ephemeral: true, files: [{attachment: filepath, name: filename}]});
    },
};
