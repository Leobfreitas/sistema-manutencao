import { getUserFromToken, prisma } from "$lib";
import { error } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { Status } from "@prisma/client";
import { writeFileSync } from "fs";

export const load: PageServerLoad = async () => {
    const componentes = await prisma.componente.findMany();
    const localizacoes = await prisma.localizacao.findMany();
    const dependencias = await prisma.dependencia.findMany();

    return {
        componentes,
        localizacoes,
        dependencias
    };
}

export const actions = {
    create: async ({ request, cookies }) => {

        const token = cookies.get("token");
        const usuario = await getUserFromToken(token);
        if (!usuario) throw error(401, "Usuário não autenticado");

        const data = await request.formData();
        const OS = {
            descricao: data.get("descricao") as string,
            BP: data.get("BP") as string,
            status: Status.AGUARDANDO
        };

        const componenteId = parseInt(data.get("componente") as string);
        const localizacaoId = parseInt(data.get("localizacao") as string);
        const dependenciaId = parseInt(data.get("dependencia") as string);

        const resultado = await prisma.ordemServico.create({
            data: {
                ...OS,
                componente: {
                    connect: { id: componenteId }
                },
                localizacao: {
                    connect: { id: localizacaoId }
                },
                dependencia: {
                    connect: { id: dependenciaId }
                },
                usuario: {
                    connect: { id: usuario.id }
                }
            }
        })

        const imagem = data.get("imagem") as File;
        if (!imagem || imagem.size === 0) return;

        const caminhoImagem = `uploaded/imagens-OS/${resultado.id}_${imagem.name}`;
        writeFileSync(caminhoImagem, Buffer.from(await imagem.arrayBuffer()));

        console.log(await prisma.ordemServico.update({
            where: {
                id: resultado.id
            },
            data: {
                imagem: caminhoImagem
            }
        }))
    }
} satisfies Actions;