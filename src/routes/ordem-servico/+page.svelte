<script lang="ts">
  import CardOs from "$lib/components/cardOS.svelte";
  import { TipoUsuario } from "prisma/prisma-client";
  import type { PageData } from "./$types";

  export let data: PageData;

  let usuario: string = "";
  let localizacao: string = "";
  let dependencia: string = "";
  let componente: string = "";
  let status: string = "TODOS";

  $: osFiltradas = filtrar(
    usuario,
    localizacao,
    dependencia,
    componente,
    status
  );

  //TODO: Usar fuzzy finding: https://fusejs.io/
  function filtrar(
    usuario: string,
    localizacao: string,
    dependencia: string,
    componente: string,
    status: string
  ) {
    return (
      data.ordensDeServico?.filter((os) => {
        return (
          os.usuario.nome.includes(usuario) &&
          os.localizacao.nome.includes(localizacao) &&
          os.dependencia.nome.includes(dependencia) &&
          os.componente.nome.includes(componente) &&
          (status == "TODOS" || os.status.includes(status))
        );
      }) || []
    );
  }
</script>

<div class="container mt-5">
  <div class="row mb-2">
    <h1 class="col-8">Ordens de Serviço</h1>
    <div class="col-4 text-end">
      <a href="/ordem-servico/cadastro" class="btn btn-primary">+ Nova</a>
    </div>
    <hr class="col-12" />
  </div>
  <div class="row mb-3">
    <div class="col-12 col-md-3">
      <h3>Filtros</h3>
      {#if data.usuario && data.usuario.cargo === TipoUsuario.ADMINISTRADOR}
        <div class="mb-2">
          <label for="usuario" class="form-label">Nome Usuário</label>
          <input
            type="text"
            class="form-control"
            placeholder="Usuário"
            id="usuario"
            bind:value={usuario}
          />
        </div>
      {/if}
      <div class="mb-2">
        <label for="localizacao" class="form-label">Nome da Localização</label>
        <input
          type="text"
          class="form-control"
          placeholder="Localização"
          id="localizacao"
          bind:value={localizacao}
        />
      </div>
      <div class="mb-2">
        <label for="dependencia" class="form-label">Dependência</label>
        <input
          type="text"
          class="form-control"
          placeholder="Dependência"
          id="dependencia"
          bind:value={dependencia}
        />
      </div>
      <div class="mb-2">
        <label for="componente" class="form-label">Nome do Componente</label>
        <input
          type="text"
          class="form-control"
          placeholder="Componente"
          id="componente"
          bind:value={componente}
        />
      </div>
      <div class="mb-3">
        <label for="status" class="form-label">Status da OS</label>
        <select class="form-select" id="status" bind:value={status}>
          <option value="TODOS" selected> Todos </option>
          <option value="NOVA_SOLICITACAO"> Novas Solicitações </option>
          <option value="EM_ESPERA"> Em Espera </option>
          <option value="EM_ANALISE"> Em Analise </option>
          <option value="CONCLUIDO"> Concluido </option>
          <option value="CANCELADO"> Cancelado </option>
        </select>
      </div>
    </div>
    <div class="col-md-8 col-12">
      <div class="row">
        {#if osFiltradas && osFiltradas.length > 0}
          {#each osFiltradas as ordemDeServico}
            <div class="col-12 col-md-4 mb-2">
              <CardOs os={ordemDeServico} />
            </div>
          {/each}
        {:else}
          <p>Nenhuma ordem de serviço encontrada.</p>
        {/if}
      </div>
    </div>
  </div>
</div>
