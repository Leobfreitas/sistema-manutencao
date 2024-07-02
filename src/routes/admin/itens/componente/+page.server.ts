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
    update: async ({ request }) => {
        const data = await request.formData();
        const id = parseInt(data.get("id") as string);
        const updateName = data.get("update-name") as string;
        await prisma.componente.update({
            where: { id },
            data: {
                nome: updateName
            }
        })
    }
} satisfies Actions;
