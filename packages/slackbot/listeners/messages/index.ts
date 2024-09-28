import { App } from '@slack/bolt';
// import sampleMessageCallback from './sample-message';
import { brandColors, linkToStyleGuide } from './styleguide/meta';

const register = (app: App) => {
  // app.message(/^(hi|hello|hey).*/, sampleMessageCallback);

  app.message(/^.*(Recap Time Squad|RecapTime.dev) (brand colors|logo colors).*/, brandColors);
  app.message(/^.*(brand colors|logo colors) for (Recap Time Squad|RecapTime.dev).*/, brandColors);
  app.message(/^.*(brand colors|logo colors).*/i, brandColors);
  app.message(/^.*(where is the style guide|show me the style guide|style guide).*/i, linkToStyleGuide);
};

export default { register };
