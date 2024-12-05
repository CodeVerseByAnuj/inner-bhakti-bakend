/*
  Warnings:

  - A unique constraint covering the columns `[dialCode]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `feedbackReason` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feelingLately` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userRoleId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female', 'Other');

-- CreateEnum
CREATE TYPE "FeelingLately" AS ENUM ('Terrible', 'Bad', 'Neutral', 'Good');

-- CreateEnum
CREATE TYPE "FeedbackReason" AS ENUM ('Workstress', 'Bad', 'Relationships', 'Loneliness', 'Good', 'Health');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "dialCode" TEXT NOT NULL DEFAULT '+91',
ADD COLUMN     "feedbackReason" "FeedbackReason" NOT NULL,
ADD COLUMN     "feelingLately" "FeelingLately" NOT NULL,
ADD COLUMN     "gender" "Gender" NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userRoleId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "UserRole" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_dialCode_key" ON "User"("dialCode");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userRoleId_fkey" FOREIGN KEY ("userRoleId") REFERENCES "UserRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
