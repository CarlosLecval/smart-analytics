/*
  Warnings:

  - Changed the type of `answer` on the `UserAnswer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "UserAnswer" DROP COLUMN "answer",
ADD COLUMN     "answer" JSONB NOT NULL;
