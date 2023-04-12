require("dotenv").config();
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");

const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/commandHandler");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
  ],
});

client.commands = new Collection();

module.exports = client;

client.login(process.env.TOKEN).then(() => {
  loadEvents(client);
  loadCommands(client);
});
