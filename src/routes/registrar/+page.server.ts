import { error, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { TipoUsuario } from "prisma/prisma-client"
import { hashSenha } from "$lib/crypto";
import { prisma } from "$lib/server/database";

function stringTipoUsuario(tipo: string) {
    switch (tipo) {
        case "aluno":
            return TipoUsuario.ALUNO;
        case "admin":
            return TipoUsuario.ADMINISTRADOR;
        default:
            return TipoUsuario.ALUNO;
    }
}


export const actions = {

    default: async ({ request }) => {
        const data = await request.formData();
        const usuario = {
            nome: data.get("name") as string,
            ra: data.get("ra") as string,
            email: data.get("email") as string,
            cargo: stringTipoUsuario(data.get("user-type") as string),
            senha: data.get("password") as string,
        };
        const confirmaSenha = data.get("password-confirm") as string;

        if (usuario.senha != confirmaSenha) {
            throw error(400, "As senhas não coincidem");
        }

        usuario.senha = await hashSenha(usuario.senha);
        await prisma.usuario.create({
            data: usuario
        });

        throw redirect(302, "/login");
    }

} satisfies Actions;