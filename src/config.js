import * as dotenv from 'dotenv'

/**
 * Load environment variables from a .env file, if it exists.
 */

dotenv.config()

const config = {
  DISCORD_TOKEN: process.env.DISCORD_TOKEN,
  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
  DISCORD_REDIRECT_URI: process.env.DISCORD_REDIRECT_URI,
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  BOT_ID: process.env.BOT_ID,
  AUTH_COOKIE: process.env.AUTH_COOKIE,
  STATS_API: process.env.STATS_API,
};

export default config;
