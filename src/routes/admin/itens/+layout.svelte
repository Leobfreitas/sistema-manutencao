<script lang="ts">
    import { page } from "$app/stores";

    const abas = [
        {
            nome: "Localização",
            rota: "/admin/itens/localizacao",
        },
        {
            nome: "Dependência",
            rota: "/admin/itens/dependencia",
        },
        {
            nome: "Componente",
            rota: "/admin/itens/componente",
        },
    ];
</script>

<div class="container my-5">
    <div class="row">
        {#each abas as aba}
            <div class="col-4">
                <a
                    href={aba.rota}
                    class="btn w-100 {$page.url.pathname === aba.rota
                        ? 'btn-primary'
                        : 'btn-outline-primary'}">{aba.nome}</a
                >
            </div>
        {/each}
    </div>
</div>

<slot/>