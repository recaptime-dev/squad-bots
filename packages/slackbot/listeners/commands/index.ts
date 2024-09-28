import { App } from '@slack/bolt';
import sampleCommandCallback from './sample-command';
import botCommandHandler from './rtdevbot';

const register = (app: App) => {
  app.command('/sample-command', sampleCommandCallback);
  app.command('/rtdevbot', botCommandHandler);
  app.command('/rtdevbot-dev', botCommandHandler);
};

export default { register };
