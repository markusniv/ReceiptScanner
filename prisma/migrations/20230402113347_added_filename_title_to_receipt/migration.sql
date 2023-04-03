/*
  Warnings:

  - You are about to drop the column `text` on the `Receipt` table. All the data in the column will be lost.
  - Added the required column `filename` to the `Receipt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Receipt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Receipt" DROP COLUMN "text",
ADD COLUMN     "filename" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
