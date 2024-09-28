// eslint-disable-next-line import/no-relative-packages
import { PrismaClient } from "../prisma/lib";
import { UserInfo, UserRole } from "./types";

export const prisma = new PrismaClient();

type UserLookupResult = {
  result: UserInfo | null
  error?: object | string | unknown
}

export async function lookupUser(id: string): Promise<UserLookupResult> {
  try {
    const data = await prisma.slackUser.findUnique({
      where: {
        user_id: id,
      },
    });

    if (data == null) {
      return {
        result: null,
        error: {
          code: "USER_NOT_FOUND",
          message: "Slack user not found",
        },
      };
    }
    return {
      result: {
        user_id: data.user_id,
        roles: data.roles as UserRole[],
        is_staff: data.is_staff || false,
        created_on: data.created_on,
        updated_at: data.updated_at,
      },
      error: undefined,
    };
  } catch (error) {
    console.log(error);
    return {
      result: null,
      error,
    };
  }
}

export async function linkUserToTeam(user_id: string, team: string) {
  try {
    const { roles: existingRoles } = await prisma.slackUser.findUnique({
      select: {
        roles: true,
      },
      where: {
        user_id,
      },
    }) || { roles: [] };

    const updatedRoles = [...new Set([...existingRoles, ...team])];

    const result = await prisma.slackUser.update({
      where: { user_id },
      data: { roles: updatedRoles },
    });
    return {
      result,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      result: null,
      error,
    };
  }
}
