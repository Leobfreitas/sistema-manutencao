import { error, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { comparaSenha, geraToken } from "$lib/crypto";
import { TipoUsuario } from "prisma/prisma-client";
import { prisma } from "$lib/server/database";


export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const usuario = {
            email: data.get("email") as string,
            senha: data.get("password") as string
        };

        const resultado = await prisma.usuario.findUnique({
            where: {
                email: usuario.email
            }
        });

        if (resultado == null) {
            throw error(404, "Usuário não encontrado.");
        }

        if (!await comparaSenha(usuario.senha, resultado.senha)) {
            throw error(401, "Senha incorreta.");
        }

        resultado.senha = "";

        cookies.set("token", await geraToken(resultado), {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 1 semana
        })

        switch (resultado.cargo) {
            case TipoUsuario.ADMINISTRADOR:
                throw redirect(302, "/admin/itens/localizacao");
            case TipoUsuario.ALUNO:
                throw redirect(302, "/ordem-servico");
            default:
                throw error(400, "Cargo inválido.");
        }


    }
} satisfies Actions;