/*
  Warnings:

  - You are about to drop the `Receipt` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Receipt";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
