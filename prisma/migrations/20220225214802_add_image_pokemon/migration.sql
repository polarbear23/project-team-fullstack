/*
  Warnings:

  - You are about to drop the column `pictureUrl` on the `Pokemon` table. All the data in the column will be lost.
  - Added the required column `largeImageUrl` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smallImageUrl` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "pictureUrl",
ADD COLUMN     "largeImageUrl" TEXT NOT NULL,
ADD COLUMN     "smallImageUrl" TEXT NOT NULL;
