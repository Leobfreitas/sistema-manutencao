<script lang="ts">
  import type { PageData } from "./$types";

  let editando: number = -1;

  export let data: PageData;
</script>

<div class="container">
  <form method="post" action="?/create">
    <div class="row">
      <div class="col-12 col-md-10 mb-3">
        <input
          type="text"
          class="form-control"
          id="nome"
          name="nome"
          placeholder="Entre com o nome do componente"
          required
        />
      </div>
      <div class="col-12 col-md-2 mb-3 text-end">
        <button type="submit" class="btn btn-primary w-100">Cadastrar</button>
      </div>
    </div>
  </form>

  <form action="?/update" method="post" id="update-form">
    <table class="table align-baseline">
      <thead>
        <tr>
          <th>Nome do Componente</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {#each data.componentes as componente}
          {#if componente.id === editando}
            <tr>
              <td>
                <input
                  type="text"
                  class="form-control"
                  name="update-name"
                  id="update-name"
                  bind:value={componente.nome}
                />
                <input type="hidden" name="id" value={componente.id} />
              </td>
              <td>
                <button class="btn btn-secondary" type="submit">
                  <i class="fa-solid fa-check"></i>
                </button>
              </td>
            </tr>
          {:else}
            <tr>
              <td>
                {componente.nome}
              </td>
              <td>
                <button
                  class="btn btn-secondary"
                  type="button"
                  on:click={() => {
                    editando = componente.id;
                  }}
                >
                  <i class="fa-solid fa-pencil"></i>
                </button>
              </td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  </form>
</div>
