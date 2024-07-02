<script lang="ts">
  import type { PageData } from "./$types";

  let editando: number = -1;

  export let data: PageData;
</script>

<div class="container">
  <form method="post" action="?/create">
    <div class="row">
      <div class="col-12 col-md-6 mb-3">
        <input
          type="text"
          class="form-control"
          id="nome"
          name="nome"
          placeholder="Entre com o nome da Dependencia"
          required
        />
      </div>
      <div class="col-12 col-md-2 mb-3">
        <input
          type="text"
          class="form-control"
          id="siglaDependencia"
          name="siglaDependencia"
          placeholder="Sigla"
          required
        />
      </div>
      <div class="col-12 col-md-2 mb-3">
        <input
          type="text"
          class="form-control"
          id="identificacaoSeq"
          name="identificacaoSeq"
          placeholder="Id. Sequencial"
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
          <th>Nome da Dependencia</th>
          <th>Sigla da Dependencia</th>
          <th>Id Sequencial</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {#each data.dependencia as dependencia}
          {#if dependencia.id === editando}
            <tr>
              <td>
                <input
                  type="text"
                  class="form-control"
                  name="update-name"
                  id="update-name"
                  bind:value={dependencia.nome}
                />
                <input type="hidden" name="id" value={dependencia.id} />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  name="update-sigla"
                  id="update-sigla"
                  bind:value={dependencia.siglaDependencia}
                />
              </td>
              <td>
                <input
                  type="text"
                  class="form-control"
                  name="update-idSeq"
                  id="update-idSeq"
                  bind:value={dependencia.identificacaoSeq}
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
                {dependencia.nome}
              </td>
              <td>
                {dependencia.siglaDependencia}
              </td>
              <td>
                {dependencia.identificacaoSeq}
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-secondary"
                  on:click={() => {
                    editando = dependencia.id;
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
