<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cadastro de Usuário</title>
 
</head>
<body>
  <header style="text-align: center;">
    <img src="../unioesteimg.png" alt="Logo" style="max-width: 30%; height: auto; padding: 20px;">
  </header>
  <main>
    <form class="container my-5 h-100" method="post" style="max-width: 500px">
      <h4 class="text-center">Cadastro de Usuário</h4>
      <div class="row border rounded justify-content-center align-content-center">
        <div class="col-12 col-lg-6 mb-3">
          <label for="name" class="form-label">Nome</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            placeholder="Nome"
            required
          />
        </div>
        <div class="col-12 col-lg-6 mb-3">
          <label for="ra" class="form-label">R.A.</label>
          <input
            type="text"
            class="form-control"
            id="ra"
            name="ra"
            placeholder="R.A."
            required
          />
        </div>
        <div class="col-12 col-lg-8 mb-3">
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
        <div class="col-12 col-lg-4 mb-3">
          <label for="user-type" class="form-label">Tipo de Usuário</label>
          <select name="user-type" id="user-type" class="form-select">
            <option value="aluno">Aluno</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
        <div class="col-12 col-lg-6 mb-3">
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
        <div class="col-12 col-lg-6 mb-3">
          <label for="password_confirmation" class="form-label"
            >Confirmação de Senha</label
          >
          <input
            type="password"
            class="form-control"
            id="password-confirm"
            name="password-confirm"
            placeholder="Confirmação de Senha"
            required
          />
        </div>
        <div class="col-12 mb-3 text-end">
          <button type="submit" class="btn btn-primary">Cadastrar</button>
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
    color: #D9D9D9; 
    padding: 10px;
  }
 
  .container {
      border: 2px solid #BC2C5C;
      padding: 20px;
      border-radius: 10px;
  }
    input[type="text"],
    input[type="email"],
    input[type="password"],
    select.form-select {
      border: 1px solid #87143a;
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
  }

  .btn-primary:hover {
    background-color: #940F35; 
    border-color: #940F35; 
  }
</style>
