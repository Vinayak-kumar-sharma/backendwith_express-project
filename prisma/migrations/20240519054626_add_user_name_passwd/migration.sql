-- AlterTable
ALTER TABLE "user" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "uodated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
