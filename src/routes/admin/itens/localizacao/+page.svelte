<script lang="ts">
  import type { PageData } from "./$types";

  let editando: number = -1;

  export let data: PageData;
</script>

<div class="container">
  <form method="post" action="?/create">
    <div class="row">
      <div class="col-12 col-md-8 mb-3">
        <input
          type="text"
          class="form-control"
          id="nome"
          name="nome"
          placeholder="Entre com o nome da Localizacao"
          required
        />
      </div>
      <div class="col-12 col-md-2 mb-3">
        <input
          type="text"
          class="form-control"
          id="siglaLocalizacao"
          name="siglaLocalizacao"
          placeholder="Sigla"
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
          <th>Nome da Localizacao</th>
          <th>Sigla da Localizacao</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {#each data.localizacao as localizacao}
          {#if localizacao.id === editando}
            <tr>
              <td>
                <input
                  type="text"
                  class="form-control"
                  name="update-name"
                  id="update-name"
                  bind:value={localizacao.nome}
                />
                <input type="hidden" name="id" value={localizacao.id} />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  name="update-sigla"
                  id="update-sigla"
                  bind:value={localizacao.siglaLocalizacao}
                />
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
                {localizacao.nome}
              </td>
              <td>
                {localizacao.siglaLocalizacao}
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-secondary"
                  on:click={() => {
                    editando = localizacao.id;
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
