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
        const role = interaction.options.getRole('role');
        const userlist = interaction.guild.roles.cache.get(role.id).members.map(m => m.displayName)
        await interaction.reply({ content: `Users with ${role.name}: ${userlist}.`, ephemeral: true});
    },
};
