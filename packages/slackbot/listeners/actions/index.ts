import { App } from '@slack/bolt';
import sampleActionCallback from './sample-action';
import requestAccessCallback from './request-access';

const register = (app: App) => {
  app.action('sample_action_id', sampleActionCallback);
  app.action('requestAccessPrompt', requestAccessCallback);
};

export default { register };
