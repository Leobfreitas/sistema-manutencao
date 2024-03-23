import { prisma } from "$lib/server/database";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
    const componentes = await prisma.componente.findMany();

    return {
        componentes
    };
}

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        const componente = {
            nome: data.get("nome") as string
        };

        await prisma.componente.create({ data: componente })

    },
    delete: async ({ request }) => {
        const data = await request.formData();
        const id = parseInt(data.get("id") as string);
        await prisma.componente.delete({ where: { id } })
    }
} satisfies Actions;
