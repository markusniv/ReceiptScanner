/*
  Warnings:

  - You are about to drop the column `authorId` on the `Receipt` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `timestamp` to the `Receipt` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Receipt" DROP CONSTRAINT "Receipt_authorId_fkey";

-- AlterTable
ALTER TABLE "Receipt" DROP COLUMN "authorId",
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "User";
