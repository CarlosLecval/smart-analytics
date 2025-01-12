/*
  Warnings:

  - You are about to drop the column `lectureBeganAt` on the `UserTakenTest` table. All the data in the column will be lost.
  - Added the required column `readingBeganAt` to the `UserTakenTest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserTakenTest" DROP COLUMN "lectureBeganAt",
ADD COLUMN     "readingBeganAt" TIMESTAMP(3) NOT NULL;
