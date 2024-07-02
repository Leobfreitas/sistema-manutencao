<script lang="ts">
  import { enhance } from "$app/forms";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<main class="container my-5">
  <div class="mb-3">
    Campos com <span class="text-danger">*</span> são obrigatórios.
  </div>
  <form
    class="row"
    action="?/create"
    method="post"
    use:enhance
    enctype="multipart/form-data"
  >
    <div class="col-12 col-md-6 mb-3">
      <label for="localizacao" class="form-label"> Localização<span class="text-danger">*</span> </label>
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
      <label for="dependencia" class="form-label"> Dependencia<span class="text-danger">*</span> </label>
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
      <label for="componente" class="form-label"> Componente<span class="text-danger">*</span> </label>
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
      <label for="BP" class="form-label"> Nº de Bem Patrimonial (BP) </label>
      <input
        type="text"
        class="form-control"
        name="BP"
        id="BP"
        placeholder="XXXXX"
      />
    </div>
    <div class="col-12 mb-3">
      <label for="descricao" class="form-label"> Descrição<span class="text-danger">*</span></label>
      <textarea
        name="descricao"
        id="descricao"
        rows="10"
        class="form-control"
        placeholder="Relate o problema encontrado"
        required
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
