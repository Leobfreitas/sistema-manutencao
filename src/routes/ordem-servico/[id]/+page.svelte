<script lang="ts">
  import { enhance } from "$app/forms";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<main class="container my-5">
  <form action="?/delete" method="post">
    <input type="hidden" name="id" value={data.os.id} />
    <button class="btn btn-danger">Excluir</button>
  </form>
  <div class="row">
    <div class="col-12 col-md-4 mb-3">
      <label for="id" class="form-label"> ID </label>
      <input type="text" class="form-control" value={data.os.id} disabled />
    </div>
    <div class="col-12 col-md-4 mb-3">
      <label for="status" class="form-label"> Status </label>
      <input type="text" class="form-control" value={data.os.status} disabled />
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
    {#if data.usuario?.cargo === "ALUNO" && data.os.status === "EM_ANALISE" || data.usuario?.cargo === "ADMINISTRADOR"}
    <form action="?/update" method="post" class="col-12 mb-3" use:enhance>
      <input type="hidden" name="id" value={data.os.id} />
      <input type="hidden" name="idUsuario" value={data.usuario.id} />
      <div class="row">
        {#if data.usuario?.cargo === "ADMINISTRADOR"}          
        <div class="col-md-4 col-12">
          <label for="status" class="form-label"> Novo Status </label>
          <select name="status" id="status" class="form-select">
            <option value="NOVA_SOLICITACAO">Nova Solicitação</option>
            <option value="EM_ESPERA">Em Espera</option>
            <option value="EM_ANALISE">Em Análise</option>
            <option value="CONCLUIDO">Concluido</option>
            <option value="CANCELADO">Cancelado</option>
          </select>
        </div>
      {:else}
      <input type="hidden" name="status" value={"EM_ESPERA"}/>
        {/if}
        <div class="col-md-6 col-12">
          <label for="mensagem" class="form-label"> Mensagem </label>
          <input
            id="mensagem"
            type="text"
            class="form-control"
            name="mensagem"
            placeholder={
              data.usuario.cargo === "ALUNO" ? "Entre com uma resposta" : "Status atualizado para ..."
            }
          />
        </div>
        <div class="col-md-2 col-12 text-center">
          <button class="btn btn-primary" type="submit">Atualizar</button>
        </div>
      </div>
    </form>
    {/if}
    {#if data.os.mensagens}
      <label for="eventos" class="form-label col-12"> Eventos da OS </label>
      <table class="table align-baseline col-12">
        <thead>
          <tr>
            <th>Autor</th>
            <th>Data</th>
            <th>Mensagem</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {#each data.os.mensagens as mensagem}
            <tr>
              <td>
                {mensagem.usuario.nome}
              </td>
              <td>
                {mensagem.dataCriacao.toLocaleDateString() +
                  " " +
                  mensagem.dataCriacao.toLocaleTimeString()}
              </td>
              <td>
                {mensagem.mensagem}
              </td>
              <td>
                {mensagem.status}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    {/if}
    {#if data.os.imagem}
      <div class="col-12 mb-3">
        <div class="form-label"> Imagem do Problema </div>
        <img
          src={"../" + data.os.imagem}
          alt="Imagem da OS"
          style="max-width: 100%"
        />
      </div>
    {/if}
  </div>
</main>
