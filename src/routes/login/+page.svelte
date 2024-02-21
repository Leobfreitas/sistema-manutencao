<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
 
</head>
 <body>
  <header style="text-align: center;">
    <img src="../unioesteimg.png" alt="Logo" style="max-width: 30%; height: auto; padding: 20px;">
  
  </header>
<main>
    <form class="container my-5 h-100" method="post" style="max-width: 500px">
      <h4 class="text-center">Login</h4>
      <div class="row border rounded justify-content-center align-content-center">
        <div class="col-12 mb-3">
          <label for="email" class="form-label">E-mail</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="E-mail"
            required
          />
        </div>
        <div class="col-12 mb-3">
          <label for="password" class="form-label">Senha</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            placeholder="Senha"
            required
          />
        </div>
        <div class="col-12 mb-3 text-end">
          <button type="submit" class="btn btn-primary">Logar</button>
        </div>
      </div>
    </form>
  </main>
 </body>
</html>

<style>
  body {
    background-color: #D9D9D9; 
  }

  header {
    background-color: #BC2C5C;
    color: #FFFFFF; /* Cor do texto no cabeçalho */
    padding: 10px;
    text-align: center; /* Centralizar texto no cabeçalho */
  }

  .container {
    border: 2px solid #BC2C5C;
    padding: 20px;
    border-radius: 10px;
  }

  input[type="email"],
  input[type="password"],
  select.form-select {
    border: 1px solid #87143a; /* Cor da borda do input */
    border-radius: 5px;
    padding: 8px;
    width: 100%;
    background-color: #D9D9D9;
  }

  main {
    padding: 20px;
  }

  .form-label {
    font-weight: bold;
  }

  .btn-primary {
    background-color: #BC2C5C;
    border-color: #BC2C5C;
    color: #FFFFFF; /* Cor do texto no botão */
  }

  .btn-primary:hover {
    background-color: #940F35;
    border-color: #940F35;
  }
  </style>