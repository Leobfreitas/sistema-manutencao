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