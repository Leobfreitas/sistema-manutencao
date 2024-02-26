import { decodificaToken, verificaToken } from "$lib/crypto";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({cookies}) => {
    const token = cookies.get("token");
    if (!token) { //não tem token
        return {
            usuario: null
        }
    }

    if (await verificaToken(token)) { //token válido, retorna o usuário
        const decodificado = await decodificaToken(token);
        return {
            usuario: decodificado
        }
    }

    //token inválido, deleta o token
    cookies.delete("token", { path: "/" });
    return {
        usuario: null
    };
}