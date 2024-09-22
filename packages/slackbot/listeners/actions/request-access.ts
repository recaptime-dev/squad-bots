import { AllMiddlewareArgs, BlockAction, SlackActionMiddlewareArgs } from '@slack/bolt';
import requestPermissionsPrompt from '../../lib/blocks/request_permissions';

const requestAccessCallback = async ({ ack, client, body }:
  AllMiddlewareArgs & SlackActionMiddlewareArgs<BlockAction>) => {
  try {
    await ack();
    await client.views.update({
      trigger_id: body.trigger_id,
      view: requestPermissionsPrompt,
    });
  } catch {
    await client.views.update({
      trigger_id: body.trigger_id,
      view: {
        type: 'modal',
        title: {
          type: 'plain_text',
          text: 'Something went wrong',
          emoji: true,
        },
        close: {
          type: 'plain_text',
          text: 'Cancel',
          emoji: true,
        },
        blocks: [
          {
            type: 'section',
            text: {
              type: 'plain_text',
              text: "Sorry if this happened to you, but we're looking into it at the moment.",
              emoji: true,
            },
          },
        ],
      },
    });
  }
};

export default requestAccessCallback;
