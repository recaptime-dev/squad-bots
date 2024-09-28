import { ModalView } from "@slack/bolt";

const requestPermissionsPrompt: ModalView = {
  callback_id: "requestPermSubmission",
  type: "modal",
  title: {
    type: "plain_text",
    text: "Request permissions",
    emoji: true,
  },
  submit: {
    type: "plain_text",
    text: "Submit request",

    emoji: true,
  },
  close: {
    type: "plain_text",
    text: "Cancel",
    emoji: true,
  },
  blocks: [
    {
      type: "input",
      block_id: "role",
      element: {
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Select role here",
          emoji: true,
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "Squad member",
              emoji: true,
            },
            value: "crew.recaptime.dev",
          },
          {
            text: {
              type: "plain_text",
              text: "Hack Clubber from HQ or HCB",
              emoji: true,
            },
            value: "hackclub.com/team",
          },
          {
            text: {
              type: "plain_text",
              text: "Community maintainers + mods (including community mods/Hack Club Slack FD)",
              emoji: true,
            },
            value: "crew.recaptime.dev/community-maintainers",
          },
          {
            text: {
              type: "plain_text",
              text: "None of the above",
              emoji: true,
            },
            value: "regular-user",
          },
        ],
        action_id: "selector",
      },
      label: {
        type: "plain_text",
        text: "Are you RecapTime.dev staff or community maintainer?",
        emoji: true,
      },
      optional: false,
    },
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: "To unlock more of Recap Time Bot features, you must be a <https://crew.recaptime.dev|current squad member> or <https://wiki.recaptime.dev/handbook/access-permission-levels#eligibility|part of eligible groups>.",
        },
      ],
    },
    {
      type: "input",
      block_id: "codeforge_profile",
      element: {
        type: "plain_text_input",
        action_id: "username",
      },
      label: {
        type: "plain_text",
        text: "Your GitHub, GitLab SaaS or sourcehut username",
        emoji: true,
      },
      hint: {
        type: "plain_text",
        text: "https://code-forge.tld/username",
      },
      optional: false,
    },
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: "If you self-host GitLab, sourcehut or other open-source git hosting service, please paste the full profile URL here.",
        },
      ],
    },
    {
      type: "input",
      block_id: "reason",
      element: {
        type: "plain_text_input",
        multiline: true,
        action_id: "content",
      },
      label: {
        type: "plain_text",
        text: "Request reason",
        emoji: true,
      },
      hint: {
        text: "Your reason here",
        type: "plain_text",
      },
      optional: false,
    },
    {
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: "We use this information to help use review your request and grant you access faster.",
        },
      ],
    },
  ],
};

export default requestPermissionsPrompt;
