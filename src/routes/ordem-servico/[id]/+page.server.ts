import { prisma } from "$lib";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const os = await prisma.ordemServico.findUnique({
    where: {
      id: parseInt(params.id)
    },
    include: {
      componente: true,
      dependencia: true,
      localizacao: true,
      usuario: true
    }
  });

  if (!os) throw error(404, "Ordem de serviço não encontrada");

  return {
    os
  }
}