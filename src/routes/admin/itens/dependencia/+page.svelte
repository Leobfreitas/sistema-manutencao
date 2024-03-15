<script lang="ts">
  import type { PageData } from "./$types";

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
            <form method="post" action="?/delete">
              <input type="hidden" name="id" value={dependencia.id} />
              <button type="submit" class="btn btn-danger"> Remover </button>
            </form>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>