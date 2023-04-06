/*
  Warnings:

  - You are about to drop the `ScoreSheet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ScoreSheet" DROP CONSTRAINT "ScoreSheet_userId_fkey";

-- DropForeignKey
ALTER TABLE "ScoredSong" DROP CONSTRAINT "ScoredSong_scoreSheetId_fkey";

-- DropTable
DROP TABLE "ScoreSheet";

-- CreateTable
CREATE TABLE "Scoresheet" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Scoresheet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Scoresheet" ADD CONSTRAINT "Scoresheet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScoredSong" ADD CONSTRAINT "ScoredSong_scoreSheetId_fkey" FOREIGN KEY ("scoreSheetId") REFERENCES "Scoresheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
