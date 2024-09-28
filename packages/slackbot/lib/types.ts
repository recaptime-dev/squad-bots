// Acceptable user roles
export type UserRole = "community" | "crew.recaptime.dev" | "hackclub.com/team"

/**
 * Slack user information
 */
export interface UserInfo {
  // Slack user ID
  user_id: string

  roles?: UserRole[]

  // Whether if a user is a Recap Time Squad squad member or Hack Club HQ or HCB staff.
  is_staff: boolean

  // Whether the user is banned from using the bot
  banned?: boolean
  ban_reason?: string

  // eslint-disable-next-line no-use-before-define
  permission_requests?: BotPermissionRequest[]

  created_on: Date
  updated_at: Date
}

export interface BotPermissionRequest {
  id: string,
  user: UserInfo, // This references UserInfo, which is now defined before this type
  user_id: UserInfo["user_id"],
  created_on: Date,
  updated_on: Date
}
