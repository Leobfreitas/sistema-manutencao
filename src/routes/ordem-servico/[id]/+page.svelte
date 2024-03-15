<script lang="ts">
  import { enhance } from "$app/forms";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<main class="container my-5">
  <form
    class="row"
    action="?/update"
    method="post"
    use:enhance
    enctype="multipart/form-data"
  >
    <div class="col-12 col-md-4 mb-3">
      <label for="id" class="form-label"> ID </label>
      <input
        type="text"
        class="form-control"
        value={data.os.id}
        disabled
      />
    </div>
    <div class="col-12 col-md-4 mb-3">
      <label for="status" class="form-label"> Status </label>
      <input
        type="text"
        class="form-control"
        value={data.os.status}
        disabled
      />
    </div>
    <div class="col-12 col-md-4 mb-3">
      <label for="data" class="form-label">Data de Criação</label>
      <input
        id="data"
        type="datetime"
        class="form-control"
        value={data.os.data.toLocaleDateString() +
          " " +
          data.os.data.toLocaleTimeString()}
        disabled
      />
    </div>        
    <div class="col-12 col-md-6 mb-3">
      <label for="localizacao" class="form-label"> Localização </label>
      <input
        type="text"
        class="form-control"
        value={data.os.localizacao.nome}
        disabled
      />
    </div>
    <div class="col-12 col-md-6 mb-3">
      <label for="dependencia" class="form-label"> Dependencia </label>
      <input
        type="text"
        class="form-control"
        value={data.os.dependencia.nome}
        disabled
      />
    </div>
    <div class="col-md-8 col-12 mb-3">
      <label for="componente" class="form-label"> Componente </label>
      <input
        type="text"
        class="form-control"
        value={data.os.componente.nome}
        disabled
      />
    </div>
    <div class="col-12 col-md-4 mb-3">
      <label for="BP" class="form-label"> BP </label>
      <input type="text" class="form-control" value={data.os.BP} disabled />
    </div>
    <div class="col-12 mb-3">
      <label for="descricao" class="form-label"> Descrição </label>
      <textarea
        name="descricao"
        id="descricao"
        rows="10"
        class="form-control"
        value={data.os.descricao}
        disabled
      ></textarea>
    </div>
    {#if data.os.imagem}
      <div class="col-12 mb-3">
        <label for="imagem" class="form-label"> Imagem do Problema </label>
        <img
          src={"../" + data.os.imagem}
          alt="Imagem da OS"
          style="max-width: 100%"
        />
      </div>
    {/if}
    <div class="col-12">
      <button class="btn btn-primary w-100" type="submit"> Enviar </button>
    </div>
  </form>
</main>
