import { AllMiddlewareArgs, SlackEventMiddlewareArgs } from '@slack/bolt';

const brandColors = async ({ say }: AllMiddlewareArgs & SlackEventMiddlewareArgs<'message'>) => {
  try {
    await say({
      username: 'Style Guide and Design System - RecapTime.dev',
      icon_url: 'https://files.slack.com/files-pri/T0266FRGM-F07PP7A6R7A/style_guides_-_recaptime.dev.png?pub_secret=bdac3f92e8',
      text: 'From Recap Time Squad\'s logo (<https://wiki.recaptime.dev/design/branding|made with Canva>): #bff6f9 #f8049c #fdd54f\n\nFrom Hack Club HQ (<https://hackclub.com/brand/|see brand kit>): #ec3750 #ff8c37 #f1c40f #33d6a6 #5bc0de #338eda #a633d6 #8492a6',
    });
  } catch (error) {
    console.error(error);
  }
};

const linkToStyleGuide = async ({ say }: AllMiddlewareArgs & SlackEventMiddlewareArgs<'message'>) => {
  try {
    await say({
      username: 'Style Guide and Design System - RecapTime.dev',
      icon_url: 'https://files.slack.com/files-pri/T0266FRGM-F07PP7A6R7A/style_guides_-_recaptime.dev.png?pub_secret=bdac3f92e8',
      text: 'https://wiki.recaptime.dev/style-guide',
    });
  } catch (error) {
    console.error(error);
  }
};

const linkToDesign = async ({ say }: AllMiddlewareArgs & SlackEventMiddlewareArgs<'message'>) => {
  try {
    await say({
      username: 'Style Guide and Design System - RecapTime.dev',
      icon_url: 'https://files.slack.com/files-pri/T0266FRGM-F07PP7A6R7A/style_guides_-_recaptime.dev.png?pub_secret=bdac3f92e8',
      text: 'Looking for our design system and UI? https://wiki.recaptime.dev/design (we\'re brainstorming on this behind the scenes so apologies for the 404s)',
    });
  } catch (error) {
    console.error(error);
  }
};

export {
  brandColors,
  linkToStyleGuide,
  linkToDesign,
};
