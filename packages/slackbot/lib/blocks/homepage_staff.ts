export default function homepageStaffView(
  uid: string,
  username: string,
  role: string,
  teams?: string[],
) {
  return {
    type: 'home',
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: 'Welcome home :house:',
          emoji: true,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `This is your home for everything RecapTime.dev from ${process.env.SLACK_WORKSPACE_NAME}. If you need help, chine in <#${process.env.SLACK_BOT_SUPPORT_CHANNEL}> or ping <@${process.env.SLACK_SUPERADMIN_USERID}>`,
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'image',
            image_url: 'https://api.slack.com/img/blocks/bkb_template_images/placeholder.png',
            alt_text: 'placeholder',
          },
        ],
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*Bot Access Permissions*',
        },
        accessory: {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Request additional permissions',
            emoji: true,
          },
          value: 'requestAccessPrompt',
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Is staff*: true\n*Role*: ${role}\n*Squad SSO username*: ${username}`,
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'image',
            image_url: 'https://api.slack.com/img/blocks/bkb_template_images/placeholder.png',
            alt_text: 'placeholder',
          },
        ],
      },
    ],
  };
}
