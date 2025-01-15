/*
  Warnings:

  - You are about to alter the column `order` on the `Question` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `order` on the `TestSection` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Question" ALTER COLUMN "order" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "TestSection" ALTER COLUMN "order" SET DATA TYPE DOUBLE PRECISION;
