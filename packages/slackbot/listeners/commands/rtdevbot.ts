import { AllMiddlewareArgs, SlackCommandMiddlewareArgs } from '@slack/bolt';

const botCommandHandler = async ({ ack, respond, payload }:
  AllMiddlewareArgs & SlackCommandMiddlewareArgs) => {
  try {
    await ack();
    if (payload.text === 'help') {

    }
    await respond('We\'re working onto it soon :)');
  } catch (error) {
    console.error(error);
    await respond('Something gone wrong, but we\'re looking into it soon!');
  }
};

export default botCommandHandler;
