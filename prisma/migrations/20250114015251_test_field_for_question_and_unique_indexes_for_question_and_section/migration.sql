/*
  Warnings:

  - A unique constraint covering the columns `[testId,order]` on the table `Question` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[testId,order]` on the table `TestSection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `testId` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "testId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Question_testId_order_key" ON "Question"("testId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "TestSection_testId_order_key" ON "TestSection"("testId", "order");

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
