/*
  Warnings:

  - You are about to drop the column `scoreSheetId` on the `ScoredSong` table. All the data in the column will be lost.
  - Added the required column `scoresheetId` to the `ScoredSong` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ScoredSong" DROP CONSTRAINT "ScoredSong_scoreSheetId_fkey";

-- AlterTable
ALTER TABLE "ScoredSong" DROP COLUMN "scoreSheetId",
ADD COLUMN     "scoresheetId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ScoredSong" ADD CONSTRAINT "ScoredSong_scoresheetId_fkey" FOREIGN KEY ("scoresheetId") REFERENCES "Scoresheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
