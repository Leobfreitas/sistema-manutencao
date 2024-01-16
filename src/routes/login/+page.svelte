<main>
    <form class="container my-5 h-100" method="post" style="max-width: 500px">
      <h4 class="text-center">Tela de Login</h4>
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