<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<div class="container">
    <form method="post" use:enhance enctype="multipart/form-data">
        <div class="row">
            <div class="col-3">
                <label for="localizacao" class="form-label">
                    Localização
                </label>
                <select name="localizacao" id="localizacao" class="form-select">
                    <option value="" disabled selected>
                        Escolha uma localização...
                    </option>
                    {#each data.localizacoes as localizacao}
                    <option value="{localizacao.id}">
                        {localizacao.nome}
                    </option>
                    {/each}
                </select>
            </div>
            <div class="col-3">
                <label for="imagem" class="form-label">
                    Imagem do Problema
                </label>
                <input type="file" id="imagem" name="imagem" accept="image/*" class="form-control">
            </div>
        </div>
    </form>
</div>