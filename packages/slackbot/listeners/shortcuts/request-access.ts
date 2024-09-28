import { AllMiddlewareArgs, SlackShortcutMiddlewareArgs } from '@slack/bolt';
import requestPermissionsPrompt from '../../lib/blocks/request_permissions';

const requestAccessShortcut = async ({ shortcut, ack, client, respond }:
  AllMiddlewareArgs & SlackShortcutMiddlewareArgs) => {
  try {
    const { trigger_id } = shortcut;
    await ack();
    await client.views.open({
      trigger_id,
      view: requestPermissionsPrompt,
    });
  } catch (error) {
    console.error(error);
    await respond({
      mrkdwn: true,
      text: `Something went wrong on the backend: ${typeof error === 'object' ? `\`${JSON.stringify(error)}\`` : error}`,
    });
  }
};

export default requestAccessShortcut;