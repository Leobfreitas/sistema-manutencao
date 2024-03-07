import { getUserFromToken, prisma } from "$lib";
import { TipoUsuario } from "prisma/prisma-client";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
  const token = cookies.get("token");
  const usuario = await getUserFromToken(token);
  if (!usuario) throw error(401, "Usuário não autenticado");

  const ordensDeServico = await prisma.ordemServico.findMany({
    where: usuario.cargo === TipoUsuario.ADMINISTRADOR ? undefined : {
      usuario: {
        id: usuario.id
      }
    },
    include: {
      usuario: true,
      localizacao: true,
      dependencia: true,
      componente: true
    },
  });

  return {
    ordensDeServico
  };
}