import { prisma } from "$lib";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
    const dependencia = await prisma.dependencia.findMany();

    return {
        dependencia
    };
}

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        const dependencia = {
            nome: data.get("nome") as string,
            identificacaoSeq: data.get("identificacaoSeq") as string,
            siglaDependencia: data.get("siglaDependencia") as string
        };

        await prisma.dependencia.create({ data: dependencia });

    },

    delete: async ({ request }) => {
        const data = await request.formData();
        const id = parseInt(data.get("id") as string);
        await prisma.dependencia.delete({ where: { id } })
    }
} satisfies Actions;
