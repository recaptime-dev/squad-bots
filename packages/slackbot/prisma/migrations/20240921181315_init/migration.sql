-- CreateTable
CREATE TABLE "SlackUser" (
    "slackUserId" TEXT NOT NULL,
    "is_staff" BOOLEAN NOT NULL DEFAULT false,
    "banned" BOOLEAN NOT NULL DEFAULT false,
    "ban_reason" TEXT,

    CONSTRAINT "SlackUser_pkey" PRIMARY KEY ("slackUserId")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "id" TEXT NOT NULL,
    "roleName" TEXT NOT NULL,
    "roleDescription" TEXT NOT NULL,
    "slackUserGroupId" TEXT,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SlackUserToUserRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SlackUserToUserRole_AB_unique" ON "_SlackUserToUserRole"("A", "B");

-- CreateIndex
CREATE INDEX "_SlackUserToUserRole_B_index" ON "_SlackUserToUserRole"("B");

-- AddForeignKey
ALTER TABLE "_SlackUserToUserRole" ADD CONSTRAINT "_SlackUserToUserRole_A_fkey" FOREIGN KEY ("A") REFERENCES "SlackUser"("slackUserId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SlackUserToUserRole" ADD CONSTRAINT "_SlackUserToUserRole_B_fkey" FOREIGN KEY ("B") REFERENCES "UserRole"("id") ON DELETE CASCADE ON UPDATE CASCADE;
