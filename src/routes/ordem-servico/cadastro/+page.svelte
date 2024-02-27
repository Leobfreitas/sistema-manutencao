<script lang="ts">
  import { enhance } from "$app/forms";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<main class="container my-5">
  <form
    class="row"
    action="?/create"
    method="post"
    use:enhance
    enctype="multipart/form-data"
  >
    <div class="col-12 col-md-6 mb-3">
      <label for="localizacao" class="form-label"> Localização </label>
      <select name="localizacao" id="localizacao" class="form-select" required>
        <option value="" disabled selected> Escolha uma localização... </option>
        {#each data.localizacoes as localizacao}
          <option value={localizacao.id}>
            {localizacao.nome}
          </option>
        {/each}
      </select>
    </div>
    <div class="col-12 col-md-6 mb-3">
      <label for="dependencia" class="form-label"> Dependencia </label>
      <select name="dependencia" id="dependencia" class="form-select" required>
        <option value="" disabled selected> Escolha uma dependência... </option>
        {#each data.dependencias as dependencia}
          <option value={dependencia.id}>
            {dependencia.nome + " - " + dependencia.identificacaoSeq}
          </option>
        {/each}
      </select>
    </div>
    <div class="col-8 mb-3">
      <label for="componente" class="form-label"> Componente </label>
      <select name="componente" id="componente" class="form-select" required>
        <option value="" disabled selected> Escolha um componente... </option>
        {#each data.componentes as componente}
          <option value={componente.id}>
            {componente.nome}
          </option>
        {/each}
      </select>
    </div>
    <div class="col-4 mb-3">
      <label for="BP" class="form-label"> BP </label>
      <input
        type="text"
        class="form-control"
        name="BP"
        id="BP"
        placeholder="XXXXX"
      />
    </div>
    <div class="col-12 mb-3">
      <label for="descricao" class="form-label"> Descrição </label>
      <textarea
        name="descricao"
        id="descricao"
        rows="10"
        class="form-control"
        placeholder="Descreva o problema"
      ></textarea>
    </div>
    <div class="col-12 mb-3">
      <label for="imagem" class="form-label"> Imagem do Problema </label>
      <input
        type="file"
        id="imagem"
        name="imagem"
        accept="image/*"
        class="form-control"
      />
    </div>
    <div class="col-12">
      <button class="btn btn-primary w-100" type="submit"> Enviar </button>
    </div>
  </form>
</main>
