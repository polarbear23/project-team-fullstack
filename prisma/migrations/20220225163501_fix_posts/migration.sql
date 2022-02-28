/*
  Warnings:

  - You are about to drop the column `numberOfLikes` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `averageRating` on the `Pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `numberOfLikes` on the `Post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'MODERATOR';

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "numberOfLikes",
ALTER COLUMN "isReported" SET DEFAULT false,
ALTER COLUMN "isRemoved" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "averageRating";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "numberOfLikes",
ALTER COLUMN "isReported" SET DEFAULT false,
ALTER COLUMN "isRemoved" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "profilePicture" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isBanned" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");
