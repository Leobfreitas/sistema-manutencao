import { getUserFromToken } from "$lib";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const token = cookies.get('token');
    return {
        usuario: await getUserFromToken(token)
    };
}