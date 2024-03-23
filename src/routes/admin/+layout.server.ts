import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import { TipoUsuario } from "prisma/prisma-client";
import { getUserFromToken } from "$lib/server/database";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const token = cookies.get("token");
    const usuario = await getUserFromToken(token);
    if (!usuario) throw error(401, "Usuário não autenticado");
    if (usuario.cargo !== TipoUsuario.ADMINISTRADOR) throw error(403, "Usuário não autorizado");
}