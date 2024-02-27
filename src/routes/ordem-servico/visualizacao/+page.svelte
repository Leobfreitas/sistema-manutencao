<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  let usuario: string = "";
  let localizacao: string = "";
  let dependencia: string = "";
  let componente: string = "";
  let status: string = "TODOS";

  $:osFiltradas = filtrar(usuario, localizacao, dependencia, componente, status);

  function filtrar(usuario: string, localizacao: string, dependencia: string, componente: string, status: string){

    return data.ordensDeServico?.filter((os)=>{
      if(usuario == "") return true;
      if(os.usuario.nome.includes(usuario)) return true;
      return false;
    }).filter((os)=>{
      if(localizacao == "") return true;
      if(os.localizacao.nome.includes(localizacao)) return true;
      return false;
    }).filter((os)=>{
      if(dependencia == "") return true;
      if(os.dependencia.nome.includes(dependencia)) return true;
      return false;
    }).filter((os)=>{
      if(componente == "") return true;
      if(os.componente.nome.includes(componente)) return true;
      return false;
    }).filter((os)=>{
      if(status == "TODOS") return true;
      if(os.status.includes(status)) return true;
      return false;
    })
  }

</script>

<div class="container mt-5">
  <div class="row mb-3">
    <div class="col-2">
      <label for="usuario" class="form-label">Nome Usuário</label>
      <input type="text" class="form-control" placeholder="Usuário" id="usuario" bind:value={usuario}>
    </div>
    <div class="col-3">
      <label for="localizacao" class="form-label">Nome da Localização</label>
      <input type="text" class="form-control" placeholder="Localização" id="localizacao" bind:value={localizacao}>
    </div>
    <div class="col-2">
      <label for="dependencia" class="form-label">Dependência</label>
      <input type="text" class="form-control" placeholder="Dependência" id="dependencia" bind:value={dependencia}>
    </div>
    <div class="col-3">
      <label for="componente" class="form-label">Nome do Componente</label>
      <input type="text" class="form-control" placeholder="Componente" id="componente" bind:value={componente}>
    </div>
    <div class="col-2">
      <label for="status" class="form-label">Status da OS</label>
      <select class="form-select" id="status" bind:value={status}>
        <option value="TODOS" selected>
          Todos
        </option>
        <option value="PENDENTE">
          Pendente
        </option>
        <option value="AGUARDANDO">
          Aguardando
        </option>
        <option value="COMPLETO">
          Completo
        </option>
        <option value="CANCELADO">
          Cancelado
        </option>
      </select>
    </div>

  </div>
  {#if osFiltradas}
    <table class="table align-baseline">
      <thead>
        <tr>
          <th>Usuário</th>
          <th>Localização</th>
          <th>Dependência</th>
          <th>Componente</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {#each osFiltradas as ordemDeServico}
          <tr>
            <td>
              {ordemDeServico.usuario.nome}
            </td>
            <td>
              {ordemDeServico.localizacao.nome}
            </td>
            <td>
              {ordemDeServico.dependencia.nome} &mdash; {ordemDeServico.dependencia.identificacaoSeq}
            </td>
            <td>
              {ordemDeServico.componente.nome} #{ordemDeServico.BP}
            </td>
            <td>
              {ordemDeServico.status}
            </td>            
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    Não há ordens de serviço.
  {/if}
</div>
