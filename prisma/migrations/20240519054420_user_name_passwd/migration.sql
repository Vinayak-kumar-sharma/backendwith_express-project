-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(190) NOT NULL,
    "email" VARCHAR(192) NOT NULL,
    "password" TEXT NOT NULL,
    "profile" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
