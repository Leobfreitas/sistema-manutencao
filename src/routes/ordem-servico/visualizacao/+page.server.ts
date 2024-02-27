import { prisma } from "$lib";
import { decodificaToken, verificaToken } from "$lib/crypto";
import { TipoUsuario } from "prisma/prisma-client";
import type { Actions, PageServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({cookies})=>{

    const token = cookies.get("token");
    if (!token) { //não tem token
        return {
            usuario: null
        }
    }

    if (await verificaToken(token)) { //token válido, retorna o usuário
        const decodificado = await decodificaToken(token);

        
        if(decodificado.cargo == TipoUsuario.ADMINISTRADOR){
            const ordensDeServico = await prisma.ordemServico.findMany({
                include: {
                    usuario: true,
                    localizacao: true,
                    dependencia: true,
                    componente: true
                }
            });
            return {
                ordensDeServico
            };
        }else{
            const ordensDeServico = await prisma.ordemServico.findMany({
                where: {
                    usuario: {
                        id: decodificado.id
                    }
                },
                include: {
                    usuario: true,
                    localizacao: true,
                    dependencia: true,
                    componente: true
                }
            });
            return { ordensDeServico }
        }
    }
    throw error(401, "Usuário inválido.");

}