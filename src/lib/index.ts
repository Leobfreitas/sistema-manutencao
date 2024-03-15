// place files you want to import through the `$lib` alias in this folder.
import { PrismaClient, Status, type Usuario } from "prisma/prisma-client";
import { verificaToken } from "./crypto";


export const prisma = new PrismaClient();

export function stringToStatus(status: string) {
  switch (status) {
    case 'NOVA_SOLICITACAO': return Status.NOVA_SOLICITACAO;
    case 'EM_ESPERA': return Status.EM_ESPERA;
    case 'EM_ANALISE': return Status.EM_ANALISE;
    case 'CONCLUIDO': return Status.CONCLUIDO;
    case 'CANCELADO': return Status.CANCELADO;
    default: return Status.NOVA_SOLICITACAO;
  }
}

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