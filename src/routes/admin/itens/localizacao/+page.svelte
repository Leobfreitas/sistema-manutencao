<script lang="ts">
  import type { PageData } from "./$types";

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
        <tr>
          <td>
            {localizacao.nome}
          </td>
          <td>
            {localizacao.siglaLocalizacao}
          </td>
          <td>
            <form method="post" action="?/delete">
              <input type="hidden" name="id" value={localizacao.id} />
              <button type="submit" class="btn btn-danger"> Remover </button>
            </form>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
