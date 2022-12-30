import fetch from 'node-fetch';
import config from './config.js';

/**
 * Register the metadata to be stored by Discord. This should be a one time action.
 * Note: uses a Bot token for authentication, not a user token.
 */
const url = `https://discord.com/api/v10/applications/${config.DISCORD_CLIENT_ID}/role-connections/metadata`;
// supported types: number_lt=1, number_gt=2, number_eq=3 number_neq=4, datetime_lt=5, datetime_gt=6, boolean_eq=7, boolean_neq=8
const body = [
  {
    key: 'votes',
    name: 'Votes',
    description: 'Total number of Top.GG votes',
    type: 2,
  },
  {
    key: 'guilds',
    name: 'Guilds',
    description: 'Total number of servers the bot is in',
    type: 2,
  },
  {
    key: 'members',
    name: 'Members',
    description: 'Total number of members the bot can see',
    type: 2,
  },
  {
    key: 'invites',
    name: 'Invites',
    description: 'Total number of invite links the bot is tracking',
    type: 2,
  },
  {
    key: 'shards',
    name: 'Shards',
    description: 'Total number of shards the bot is running on',
    type: 2,
  }
];

const response = await fetch(url, {
  method: 'PUT',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bot ${config.DISCORD_TOKEN}`,
  },
});
if (response.ok) {
  const data = await response.json();
  console.log(data);
} else {
  //throw new Error(`Error pushing discord metadata schema: [${response.status}] ${response.statusText}`);
  const data = await response.text();
  console.log(data);
}
