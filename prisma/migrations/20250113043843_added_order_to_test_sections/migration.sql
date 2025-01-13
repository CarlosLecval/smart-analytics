/*
  Warnings:

  - Added the required column `order` to the `TestSection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TestSection" ADD COLUMN     "order" DECIMAL(65,30) NOT NULL;
