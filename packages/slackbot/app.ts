import { App, LogLevel } from '@slack/bolt';
import registerListeners from './listeners';

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
    console.log('⚡️ Bolt app is running! ⚡️');
    app.client.users.setPresence({
      presence: 'auto',
      token: process.env.SLACK_BOT_TOKEN,
    })
  } catch (error) {
    console.error('Unable to start App', error);
  }
})();
