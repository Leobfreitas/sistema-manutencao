import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
    if (!cookies.get("token")) {
        throw redirect(302, "/login");
    } else {
        throw redirect(302, "/admin/itens/localizacao");
    }
};

export const actions = {
    sair: async ({ cookies }) => {
        cookies.delete("token", { path: "/" });
        throw redirect(302, "/");
    }
} satisfies Actions;