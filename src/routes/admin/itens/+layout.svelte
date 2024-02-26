<script lang="ts">
    import { page } from "$app/stores";

    let sidebar:HTMLDivElement;
    let main:HTMLDivElement;

    function openNav() {
        sidebar.style.width = "250px";
        main.style.marginLeft = "250px";
    }

    function closeNav() {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
    }

    let dropdownButton:HTMLButtonElement;

    // Adicionando funcionalidade para o dropdown
    function Dropdown() {
        dropdownButton.classList.toggle('active');
        var dropdownContainer = dropdownButton.nextElementSibling as HTMLElement;
        if(!dropdownContainer){
            return;
        }
        if (dropdownContainer.style.display === 'block') {
            dropdownContainer.style.display = 'none';
        } else {
            dropdownContainer.style.display = 'block';
        }
    };

    const abas = [
        {
            nome: "Localização",
            rota: "/admin/itens/localizacao",
        },
        {
            nome: "Dependência",
            rota: "/admin/itens/dependencia",
        },
        {
            nome: "Componente",
            rota: "/admin/itens/componente",
        },
    ];
</script>
<svelte:head>
    <title>Página de Administração</title>
    
</svelte:head> 
  
<div class="container">
        <div class="row justify-content-center mb-3">
            {#each abas as aba}
                <div class="col-4 ">
                    <a
                        href={aba.rota}
                        class="btn w-100 {$page.url.pathname === aba.rota
                            ? 'btn-primary'
                            : 'btn-outline-primary'}">{aba.nome}</a
                    >
                </div>
            {/each}
        </div>
    </div>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
    
            <div class="sidebar" id="mySidebar" bind:this={sidebar}>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <button class="closebtn" on:click={closeNav}>×</button>
                <img src="/unioesteimg.png" alt="Logo" style="width: 100%; padding: 20px;">
            
                <button class="dropdown-btn btn-outline-secondary dropdown-toggle" bind:this={dropdownButton} on:click={Dropdown}>MENU
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-container">
                    <a href="/admin/ordem-servico/cadastro">Cadastro de Ordem de Serviço</a>
                    <a href="/admin/ordem-servico/">Visualização de Ordem de Serviço</a>
                    <a href="/admin/itens/localizacao">Cadastro de Itens</a>
                </div>
            </div>
    
            <div id="main" bind:this={main}>
                <button class="openbtn" on:click={openNav}>☰</button>  
            </div>
        </div>
    </div>
</div>



<slot/> 
<style>

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
    body {
            background-color: #D9D9D9;
            margin: 0;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh; 
        }
  
        .container {
            max-width: 400px;
            align-items: center;
        }
       
    </style>
  