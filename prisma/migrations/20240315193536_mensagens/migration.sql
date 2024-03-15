/*
  Warnings:

  - The values [PENDENTE,COMPLETO,AGUARDANDO] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('CANCELADO', 'NOVA_SOLICITACAO', 'CONCLUIDO', 'EM_ESPERA', 'EM_ANALISE');
ALTER TABLE "OrdemServico" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
COMMIT;

-- CreateTable
CREATE TABLE "Mensagem" (
    "id" SERIAL NOT NULL,
    "mensagem" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,
    "ordemServicoId" INTEGER NOT NULL,

    CONSTRAINT "Mensagem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_ordemServicoId_fkey" FOREIGN KEY ("ordemServicoId") REFERENCES "OrdemServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
