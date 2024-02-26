<main class="container my-5">
  <form
    method="post"
    class="row border border-secondary rounded p-3 mx-auto"
    style="max-width: 500px"
  >
    <h4 class="text-center">Cadastro de Usuário</h4>
    <div class="col-12 col-lg-6 mb-3">
      <label for="name" class="form-label fw-bold">Nome</label>
      <input
        type="text"
        class="form-control border-secondary"
        id="name"
        name="name"
        placeholder="Nome"
        required
      />
    </div>
    <div class="col-12 col-lg-6 mb-3">
      <label for="ra" class="form-label fw-bold">R.A.</label>
      <input
        type="text"
        class="form-control border-secondary"
        id="ra"
        name="ra"
        placeholder="R.A."
        required
      />
    </div>
    <div class="col-12 col-lg-8 mb-3">
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
    <div class="col-12 col-lg-4 mb-3">
      <label for="user-type" class="form-label fw-bold">Tipo de Usuário</label>
      <select
        name="user-type"
        id="user-type"
        class="form-select border-secondary"
      >
        <option value="aluno">Aluno</option>
        <option value="admin">Administrador</option>
      </select>
    </div>
    <div class="col-12 col-lg-6 mb-3">
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
    <div class="col-12 col-lg-6 mb-3">
      <label for="password_confirmation" class="form-label fw-bold"
        >Confirmação de Senha</label
      >
      <input
        type="password"
        class="form-control border-secondary"
        id="password-confirm"
        name="password-confirm"
        placeholder="Confirmação de Senha"
        required
      />
    </div>
    <div class="col-12 mb-3 text-end">
      <button type="submit" class="btn btn-secondary">Cadastrar</button>
    </div>
  </form>
</main>
