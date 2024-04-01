<script lang="ts">
  import { statusToString } from "$lib/util";
  import type {
    Componente,
    Dependencia,
    Localizacao,
    OrdemServico,
    Usuario,
  } from "prisma/prisma-client";

  type OSProp = OrdemServico & {
    usuario: Usuario;
    localizacao: Localizacao;
    dependencia: Dependencia;
    componente: Componente;
  };

  export let os: OSProp;
</script>

<div class="card">
  <div class="card-body">
    <h5 class="card-title">{os.componente.nome + " " + os.BP}</h5>
    <h6 class="card-subtitle mb-2 text-muted">
      {os.localizacao.nome +
        " - " +
        os.dependencia.nome +
        " " +
        os.dependencia.identificacaoSeq}
    </h6>
    <p class="card-text">ID OS: {os.id}</p>
    <p class="card-text">Usuario: {os.usuario.nome}</p>
    <p class="card-text {os.status === 'EM_ANALISE' ? 'text-danger': ''}"> <b>{statusToString(os.status)}</b></p>
    <a href="/ordem-servico/{os.id}" class="btn btn-primary w-100">Detalhes</a>
  </div>
  <!-- <div class="card-footer"></div> -->
</div>
