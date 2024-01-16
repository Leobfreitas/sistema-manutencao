import { prisma } from "$lib";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({cookies})=>{
    const componentes = await prisma.componente.findMany();
    
    return {
        componentes
    };
}

export const actions = {
    default: async({request})=>{
        const data = await request.formData();
        const componente = {
            nome: data.get("nome") as string
        };

        await prisma.componente.create({data: componente})

    }
} satisfies Actions;
