<main class="container my-5">
  <form
    class="row border border-secondary rounded p-3 mx-auto"
    method="post"
    style="max-width: 500px"
  >
    <h4 class="text-center">Login</h4>
    <div class="col-12 mb-3">
      <label for="email" class="form-label fw-bold">E-mail</label>
      <input
        type="email"
        class="form-control border-secondary"
        id="email"
        name="email"
        placeholder="E-mail"
        required
      />
    </div>
    <div class="col-12 mb-3">
      <label for="password" class="form-label fw-bold">Senha</label>
      <input
        type="password"
        class="form-control border-secondary"
        id="password"
        name="password"
        placeholder="Senha"
        required
      />
    </div>
    <div class="col-12 mb-3 text-end">
      <button type="submit" class="btn btn-secondary">Entrar</button>
    </div>
  </form>
</main>
