import { prisma } from "$lib/server/database";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
    const localizacao = await prisma.localizacao.findMany();

    return {
        localizacao
    };
}

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        const localizacao = {
            nome: data.get("nome") as string,
            siglaLocalizacao: data.get("siglaLocalizacao") as string
        };

        await prisma.localizacao.create({ data: localizacao })

    },
    delete: async ({ request }) => {
        const data = await request.formData();
        const id = parseInt(data.get("id") as string);
        await prisma.localizacao.delete({ where: { id } })
    },
    update: async ({ request}) => {
        const data = await request.formData();
        const id = parseInt(data.get("id") as string);
        const localizacao = {
            nome: data.get("update-name") as string,
            siglaLocalizacao: data.get("update-sigla") as string
        };
        await prisma.localizacao.update({
            where:{
                id:id
            },
            data:localizacao
        })
    }
} satisfies Actions;
