import { App } from '@slack/bolt';
import sampleShortcutCallback from './sample-shortcut';
import requestAccessShortcut from './request-access';

const register = (app: App) => {
  app.shortcut('sample_shortcut_id', sampleShortcutCallback);
  app.shortcut('requestAccessPrompt', requestAccessShortcut);
};

export default { register };
