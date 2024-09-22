import { ModalView, View } from "@slack/bolt";

const requestPermissionsPrompt: View = {
  type: 'modal',
  title: {
    type: 'plain_text',
    text: 'Request permissions',
    emoji: true,
  },
  submit: {
    type: 'plain_text',
    text: 'Submit request',
    emoji: true,
  },
  close: {
    type: 'plain_text',
    text: 'Cancel',
    emoji: true,
  },
  blocks: [
    {
      type: 'input',
      block_id: 'role',
      element: {
        type: 'static_select',
        placeholder: {
          type: 'plain_text',
          text: 'Select role here',
          emoji: true,
        },
        options: [
          {
            text: {
              type: 'plain_text',
              text: 'Squad member',
              emoji: true,
            },
            value: 'crew.recaptime.dev',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Hack Clubber from HQ or HCB',
              emoji: true,
            },
            value: 'hackclub.com/team',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Community maintainers + mods (including community mods/Hack Club Slack FD)',
              emoji: true,
            },
            value: 'crew.recaptime.dev/community-maintainers',
          },
          {
            text: {
              type: 'plain_text',
              text: 'None of the above',
              emoji: true,
            },
            value: 'regular-user',
          },
        ],
        action_id: 'selector',
      },
      label: {
        type: 'plain_text',
        text: 'Are you RecapTime.dev staff or community maintainer?',
        emoji: true,
      },
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: "To unlock the rest of @recaptimebot's features, you must be a Recap Time Squad member (part of @recaptimesquad user group), Hack Club Staff (@staff) or HCB Staff (@hcbops, @hcbteam or @hcb-engineers), a community maintainer from one of our projects (or from a open-source project we recongized), or a community moderator on one of our community spaces (this includes the Fire Department (@fire-fighters) at Hack Club Slack).",
        },
      ],
    },
    {
      type: 'input',
      block_id: 'codeforge_profile',
      element: {
        type: 'plain_text_input',
        action_id: 'username',
      },
      label: {
        type: 'plain_text',
        text: 'Your GitHub, GitLab SaaS or sourcehut username',
        emoji: true,
      },
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: "If you don't use GitHub but using either the GitLab SaaS instance (`gitlab.com`) or sourcehut (`sr.ht`), please fill this in.",
        },
      ],
    },
    {
      type: 'input',
      block_id: 'reason',
      element: {
        type: 'plain_text_input',
        multiline: true,
        action_id: 'content',
      },
      label: {
        type: 'plain_text',
        text: 'Request reason',
        emoji: true,
      },
    },
  ],
};

export default requestPermissionsPrompt;
