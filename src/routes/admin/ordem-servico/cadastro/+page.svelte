<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <div class="sidebar" id="mySidebar">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
        <img src="/unioesteimg.png" alt="Logo" style="width: 100%; padding: 20px;">
    
        <button class="dropdown-btn btn-outline-secondary dropdown-toggle">MENU
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-container">
            <a href="/admin/ordem-servico/cadastro">Cadastro de Ordem de Serviço</a>
            <a href="/admin/ordem-servico/">Visualização de Ordem de Serviço</a>
            <a href="/admin/itens/localizacao">Cadastro de Itens</a>
        </div>
    </div>
    
    <div id="main">
        <button class="openbtn" onclick="openNav()">☰</button>  
    </div>
    
    <div class="container">
        <form class="row" action="?/create" method="post" use:enhance enctype="multipart/form-data">
            <div class="col-12 mb-3">
                <label for="localizacao" class="form-label">
                    Localização
                </label>
                <select name="localizacao" id="localizacao" class="form-select" required>
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
            <div class="col-12 mb-3">
                <label for="dependencia" class="form-label">
                    Dependencia
                </label>
                <select name="dependencia" id="dependencia" class="form-select" required>
                    <option value="" disabled selected>
                        Escolha uma dependência...
                    </option>
                    {#each data.dependencias as dependencia}
                    <option value="{dependencia.id}">
                        {dependencia.nome + " - " + dependencia.identificacaoSeq}
                    </option>
                    {/each}
                </select>
            </div>
            <div class="col-8 mb-3">
                <label for="componente" class="form-label">
                    Componente
                </label>
                <select name="componente" id="componente" class="form-select" required>
                    <option value="" disabled selected>
                        Escolha um componente...
                    </option>
                    {#each data.componentes as componente}
                    <option value="{componente.id}">
                        {componente.nome}
                    </option>
                    {/each}
                </select>
            </div>
            <div class="col-4 mb-3">
                <label for="BP" class="form-label">
                    BP
                </label>
                <input type="text" class="form-control" name="BP" id="BP" placeholder="XXXXX">
            </div>
            <div class="col-12 mb-3">
                <label for="descricao" class="form-label">
                    Descrição
                </label>
                <textarea name="descricao" id="descricao" rows="10" class="form-control" placeholder="Descreva o problema"></textarea>  
            </div>        
            <div class="col-12 mb-3">
                <label for="imagem" class="form-label">
                    Imagem do Problema
                </label>
                <input type="file" id="imagem" name="imagem" accept="image/*" class="form-control">
            </div>
            <div class="col-12">
                <button class="btn btn-primary w-100" type="submit">
                    Enviar
                </button>
            </div>
        </form>    
    </div>
    
    <script>
        function openNav() {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
    
        function closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }
    
        // Adicionando funcionalidade para o dropdown
        var btn = document.querySelector('.dropdown-btn');
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            var dropdownContainer = this.nextElementSibling;
            if (dropdownContainer.style.display === 'block') {
                dropdownContainer.style.display = 'none';
            } else {
                dropdownContainer.style.display = 'block';
            }
        });
    </script>
</body>
</html>

<style>
    body {
      background-color: #D9D9D9;
      margin: 0;
      font-family: Arial, sans-serif;
    }

    .sidebar {
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: #BC2C5C;
      overflow-x: hidden;
      transition: 0.5s;
      padding-top: 60px;
    }

    .sidebar a {
      padding: 10px 15px;
      text-decoration: none;
      font-size: 20px;
      color: white;
      display: block;
      transition: 0.3s;
    }

    .sidebar a:hover {
      background-color: #940F35;
    }

    .sidebar .closebtn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
    }

    .openbtn {
        font-size: 20px;
      cursor: pointer;
      background-color: #BC2C5C;
      color: white;
      padding: 10px 15px;
      border: none;
    }

    .openbtn:hover {
      background-color: #940F35;
    }

    #main {
      transition: margin-left .5s;
      padding: 16px;
    }
    .dropdown-btn {
      color: white;
      background-color: #BC2C5C;
      border: none;
      cursor: pointer;
      padding: 10px;
      font-size: 20px;
      width: 100%;
      text-align: left;
    }
    .dropdown-container {
      display: none;
      padding-left: 10px;
    }
    .dropdown-container a {
      display: block;
      padding: 10px;
      color: white;
      text-decoration: none;
    }
    
  </style>