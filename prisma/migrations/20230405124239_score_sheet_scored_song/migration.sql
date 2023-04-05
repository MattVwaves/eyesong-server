-- CreateTable
CREATE TABLE "ScoreSheet" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ScoreSheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScoredSong" (
    "id" SERIAL NOT NULL,
    "scoreSheetId" INTEGER NOT NULL,
    "videoId" TEXT NOT NULL,
    "record" INTEGER NOT NULL,
    "artistName" TEXT NOT NULL,
    "songTitle" TEXT NOT NULL,
    "decade" TEXT NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "ScoredSong_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ScoreSheet" ADD CONSTRAINT "ScoreSheet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScoredSong" ADD CONSTRAINT "ScoredSong_scoreSheetId_fkey" FOREIGN KEY ("scoreSheetId") REFERENCES "ScoreSheet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
