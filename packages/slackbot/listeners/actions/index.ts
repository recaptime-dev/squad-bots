import { App } from '@slack/bolt';
import sampleActionCallback from './sample-action';
import { requestAccessCallback, requestPermSubmissionHandler } from './request-access';

const register = (app: App) => {
  app.action('sample_action_id', sampleActionCallback);
  app.action('requestAccessPrompt', requestAccessCallback);
  app.action('requestPermSubmission', requestPermSubmissionHandler);
};

export default { register };
