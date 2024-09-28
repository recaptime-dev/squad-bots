import { AllMiddlewareArgs, SlackCommandMiddlewareArgs } from "@slack/bolt";

const botCommandHandler = async ({ ack, respond, payload, say }:
  AllMiddlewareArgs & SlackCommandMiddlewareArgs) => {
  try {
    await ack();
    await respond({
      text: "Working onto it soon, keep your eyes peeled :eyes:",
      response_type: "ephemeral",
    });
  } catch (error) {
    console.error(error);
  }
};

export default botCommandHandler;
