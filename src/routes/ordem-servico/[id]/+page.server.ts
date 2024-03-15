import { prisma, stringToStatus } from "$lib";
import { error, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const os = await prisma.ordemServico.findUnique({
    where: {
      id: parseInt(params.id)
    },
    include: {
      componente: true,
      dependencia: true,
      localizacao: true,
      usuario: true,
      mensagens: {
        include: {
          usuario: true
        }
      },
    }
  });

  if (!os) throw error(404, "Ordem de serviço não encontrada");

  return {
    os
  }
}

export const actions = {
  update: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id") as string;
    const status = data.get("status") as string;
    const mensagem = data.get("mensagem") as string;

    if (!id) throw error(400, "ID não informado");
    if (!status) throw error(400, "Status não informado");
    if (!mensagem) throw error(400, "Mensagem não informada");

    await prisma.ordemServico.update({
      where: {
        id: parseInt(id)
      },
      data: {
        status: stringToStatus(status),
        mensagens: {
          create: {
            mensagem: mensagem,
            status: stringToStatus(status),
            usuario: {
              connect: {
                id: 1
              }
            }
          }
        }
      }
    });
  },

  delete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id") as string;

    if (!id) throw error(400, "ID não informado");

    await prisma.mensagem.deleteMany({
      where: {
        ordemServicoId: parseInt(id)
      }
    })

    await prisma.ordemServico.delete({
      where: {
        id: parseInt(id)
      }
    })

    throw redirect(302, "/ordem-servico");
  }
} satisfies Actions;