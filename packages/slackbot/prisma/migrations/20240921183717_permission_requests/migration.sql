/*
  Warnings:

  - The primary key for the `SlackUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `slackUserId` on the `SlackUser` table. All the data in the column will be lost.
  - You are about to drop the column `roleDescription` on the `UserRole` table. All the data in the column will be lost.
  - You are about to drop the column `roleName` on the `UserRole` table. All the data in the column will be lost.
  - You are about to drop the column `slackUserGroupId` on the `UserRole` table. All the data in the column will be lost.
  - Added the required column `slack_userId` to the `SlackUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_description` to the `UserRole` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_name` to the `UserRole` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_SlackUserToUserRole" DROP CONSTRAINT "_SlackUserToUserRole_A_fkey";

-- AlterTable
ALTER TABLE "SlackUser" DROP CONSTRAINT "SlackUser_pkey",
DROP COLUMN "slackUserId",
ADD COLUMN     "slack_userId" TEXT NOT NULL,
ADD CONSTRAINT "SlackUser_pkey" PRIMARY KEY ("slack_userId");

-- AlterTable
ALTER TABLE "UserRole" DROP COLUMN "roleDescription",
DROP COLUMN "roleName",
DROP COLUMN "slackUserGroupId",
ADD COLUMN     "role_description" TEXT NOT NULL,
ADD COLUMN     "role_name" TEXT NOT NULL,
ADD COLUMN     "slack_userGroupId" TEXT;

-- CreateTable
CREATE TABLE "BotPermissionRequest" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "BotPermissionRequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BotPermissionRequest" ADD CONSTRAINT "BotPermissionRequest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "SlackUser"("slack_userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SlackUserToUserRole" ADD CONSTRAINT "_SlackUserToUserRole_A_fkey" FOREIGN KEY ("A") REFERENCES "SlackUser"("slack_userId") ON DELETE CASCADE ON UPDATE CASCADE;
