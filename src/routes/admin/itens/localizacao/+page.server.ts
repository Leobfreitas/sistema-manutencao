import { prisma } from "$lib";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({cookies})=>{
    const localizacao = await prisma.localizacao.findMany();
    
    return {
        localizacao
    };
}

export const actions = {
    default: async({request})=>{
        const data = await request.formData();
        const localizacao = {
            nome: data.get("nome") as string,
            siglaLocalizacao: data.get("siglaLocalizacao") as string
        };

        await prisma.localizacao.create({data: localizacao})

    }
} satisfies Actions;
