const { SlashCommandBuilder } = require('discord.js');

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
        //console.log(searchrole.members.map(m => m.id));
        await interaction.reply({ content: `UIDs with ${searchrole.name}: {searchrole.members.map(m = > m.id)}.`, ephemeral: true});
    },
};
