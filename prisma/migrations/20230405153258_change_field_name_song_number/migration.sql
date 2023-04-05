/*
  Warnings:

  - You are about to drop the column `record` on the `ScoredSong` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `ScoreSheet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `songNumber` to the `ScoredSong` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ScoredSong` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ScoreSheet" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ScoredSong" DROP COLUMN "record",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "songNumber" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
