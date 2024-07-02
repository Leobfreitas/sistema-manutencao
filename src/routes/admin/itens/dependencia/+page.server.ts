import { prisma } from "$lib/server/database";
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
    },
    update: async ({ request}) => {
        const data = await request.formData();
        const id = parseInt(data.get("id") as string);
        const dependencia = {
            nome: data.get("update-name") as string,
            siglaDependencia: data.get("update-sigla") as string,
            identificacaoSeq: data.get("update-idSeq") as string
        };
        await prisma.dependencia.update({
            where:{
                id:id
            },
            data:dependencia
        })
    }
} satisfies Actions;
