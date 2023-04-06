/*
  Warnings:

  - You are about to drop the `ScoredSong` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ScoredSong" DROP CONSTRAINT "ScoredSong_scoresheetId_fkey";

-- DropTable
DROP TABLE "ScoredSong";

-- CreateTable
CREATE TABLE "Song" (
    "id" SERIAL NOT NULL,
    "scoresheetId" INTEGER,
    "videoId" TEXT NOT NULL,
    "songNumber" INTEGER NOT NULL,
    "artistName" TEXT NOT NULL,
    "songTitle" TEXT NOT NULL,
    "decade" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_scoresheetId_fkey" FOREIGN KEY ("scoresheetId") REFERENCES "Scoresheet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
