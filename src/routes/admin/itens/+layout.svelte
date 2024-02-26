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

<svelte:head>
  <title>Página de Administração</title>
</svelte:head>

<div class="container mt-3">
  <div class="row justify-content-center mb-3">
    {#each abas as aba}
      <div class="col-md-4 col-12 mb-2">
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

<slot />
