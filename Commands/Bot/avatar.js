const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Exibe o avatar do xara ai que tu quiser, certo.")
    .setDMPermission(false)
    .addUserOption((option) =>
      option
        .setName("meliante")
        .setDescription("Pega o meliante ai pra gente exibir.")
        .setRequired(false)
    ),

  async execute(interaction, client) {
    const meliante =
      interaction.options.getUser("meliante") || interaction.user;

    const avatarEmbed = new EmbedBuilder()
      .setColor("Red")
      .setImage(meliante.displayAvatarURL({ size: 2048 }))
      .setFooter({
        text: `O ${interaction.user.tag} ta na tua maldade!`,
        iconURL: interaction.user.displayAvatarURL(),
      });

    interaction.reply({ embeds: [avatarEmbed] });
  },
};
