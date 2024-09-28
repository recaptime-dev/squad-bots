import { AllMiddlewareArgs, MessageOptions, SlackEventMiddlewareArgs } from '@slack/bolt';

const spellCheckGGTooling = async ({ say }: AllMiddlewareArgs & SlackEventMiddlewareArgs<'message'>) => {
  try {
    await say({
      icon_url: 'https://files.slack.com/files-pri/T0266FRGM-F07PP7A6R7A/style_guides_-_recaptime.dev.png?pub_secret=bdac3f92e8',
      username: 'Style Guide and Design System - RecapTime.dev',
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: 'We might not be the grammar police but...',
            emoji: true,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: "It looked like you misspelled Gildedguy's name wrong. We know this is not Gildedguy's Discord, but this is needed to avoid confusion.",
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Learn more',
              emoji: true,
            },
            url: 'https://notepad.recaptime.dev/s/gildedguy-name-spelling',
          },
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: 'Triggered through a RegExp expression (<https://todo.tld|see source code>) | Ping @ajhalili2006 or <https://github.com/recaptime-dev/squad/issues/new/choose|file a bug report in the meta repository>',
            },
          ],
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
};

export default spellCheckGGTooling;
