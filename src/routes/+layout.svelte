<script lang="ts">
  import { onMount } from "svelte";
  import "../style/main.scss";
  import type { LayoutData } from "./$types";
  import { onNavigate } from "$app/navigation";
  import { TipoUsuario } from "prisma/prisma-client";

  export let data: LayoutData;

  onMount(async () => {
    //Habilita interações do Bootstrap no navegador
    const bootstrap = await import("bootstrap");
  });

  onNavigate((navigation) => {
    //@ts-ignore - Configura transições de página
    if (!document.startViewTransition) return;
    return new Promise((resolve) => {
      //@ts-ignore
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary py-3">
  <div class="container">
    <a href="/" class="navbar-brand">
      <img src="/logo-unioeste-png-rgb.png" alt="UNIOESTE" height="60" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarContent">
      <div
        class="d-flex flex-column flex-lg-row align-items-baseline justify-content-between w-100"
      >
        <ul class="navbar-nav order-2 order-lg-1">
          {#if data.usuario}
            <li class="nav-item">
              <a href="/ordem-servico" class="nav-link"> Ordens de Serviço </a>
            </li>
            {#if data.usuario.cargo == "ADMINISTRADOR"}
              <li class="nav-item">
                <a href="/admin/itens/localizacao" class="nav-link">
                  Administração
                </a>
              </li>
            {/if}
          {/if}
        </ul>
        <div class="order-1 order-lg-2 mt-3 mt-lg-0">
          {#if data.usuario}
            <span class="me-auto me-lg-5 mb-2 d-block d-lg-inline-block">
              Olá, {data.usuario.nome}
            </span>
            <form
              action="/?/sair"
              method="post"
              class="d-block d-lg-inline-block"
            >
              <button type="submit" class="btn btn-outline-primary">
                Sair
              </button>
            </form>
          {:else}
            <a href="/login" class="btn btn-primary">Login</a>
            <a href="/registrar" class="btn btn-outline-primary">Registro</a>
          {/if}
        </div>
      </div>
    </div>
  </div>
</nav>
<slot />
