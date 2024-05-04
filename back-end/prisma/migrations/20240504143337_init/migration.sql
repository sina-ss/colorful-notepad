-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "from" TEXT,
    "to" VARCHAR(12) NOT NULL,
    "message" TEXT NOT NULL,
    "color" TEXT NOT NULL DEFAULT '#A377FB',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
