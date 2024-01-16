import { decodificaToken, verificaToken } from "$lib/crypto";
import { error, redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { TipoUsuario } from "prisma/prisma-client";

export const load: LayoutServerLoad = async ({cookies}) =>{

    const token = cookies.get("token");
    if(!token){
        throw error(401, "Usuário não está logado");
    }
    if(await verificaToken(token)){
        const decodificado = await decodificaToken(token);
        if(decodificado.cargo != TipoUsuario.ADMINISTRADOR){
            throw error(401, "Usuário não tem permissão");
        }
    }
}