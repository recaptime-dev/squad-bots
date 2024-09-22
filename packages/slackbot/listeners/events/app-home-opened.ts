import { AllMiddlewareArgs, SlackEventMiddlewareArgs } from '@slack/bolt';
import homepageNonStaffView from '../../lib/blocks/homepage_nonstaff';

const appHomeOpenedCallback = async ({ client, event }: AllMiddlewareArgs & SlackEventMiddlewareArgs<'app_home_opened'>) => {
  // Ignore the `app_home_opened` event for anything but the Home tab
  if (event.tab !== 'home') return;

  try {
    await client.views.publish({
      user_id: event.user,
      view: homepageNonStaffView(event.user),
    });
  } catch (error) {
    console.error(error);
  }
};

export default appHomeOpenedCallback;
