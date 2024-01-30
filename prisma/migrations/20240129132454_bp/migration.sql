/*
  Warnings:

  - Added the required column `BP` to the `OrdemServico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrdemServico" ADD COLUMN     "BP" TEXT NOT NULL;
