import { verificaToken } from "$lib/crypto";
import { PrismaClient, type Usuario } from "@prisma/client";

export const prisma = new PrismaClient();

/**
 *  Função que verifica se o token é válido e retorna o usuário caso seja
 * @param token token do usuário guardado no cookie
 * @returns retorna o usuário caso o token seja válido, caso contrário retorna null
 */
export async function getUserFromToken(token: string | undefined): Promise<Omit<Usuario, "senha"> | undefined> {
    if (!token || token.length == 0) return;
    try {
        const decoded = await verificaToken(token);
        const usuario = await prisma.usuario.findUnique({
            where: {
                id: decoded.id
            },
            select: {
                id: true,
                nome: true,
                cargo: true,
                email: true,
                ra: true
            }
        });

        if (usuario) return usuario;
        else return;
    } catch (err) {
        return
    }
}