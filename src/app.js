import express from 'express';
import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Thêm logic bot của bạn ở đây

app.listen(3000, () => {
  console.log('Express server running on port 3000');
});

client.login(process.env.DISCORD_TOKEN);
