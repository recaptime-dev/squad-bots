import { App, LogLevel } from '@slack/bolt';
import registerListeners from './listeners';
import { prisma } from './lib/db';

/** Initialization */
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  logLevel: LogLevel.DEBUG,
});

/** Register Listeners */
registerListeners(app);

/** Start Bolt App */
(async () => {
  try {
    await app.start(process.env.PORT || 33123);
    await prisma.$connect()
    console.log("Now connected to database for data presistence")
    console.log('⚡️ Recap Time Bot is up at port', process.env.PORT);
    app.client.users.setPresence({
      presence: 'auto',
      token: process.env.SLACK_BOT_TOKEN,
    })
  } catch (error) {
    console.error('Unable to start App', error);
    await prisma.$disconnect()
    process.exit(1)
  }
})();
