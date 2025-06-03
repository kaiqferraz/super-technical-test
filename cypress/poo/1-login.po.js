class login {
  insereLogin() {
    return cy.get('[name="login"]');
  }

  inserePassword() {
    return cy.get('[name="password"]');
  }

  btnEntrar() {
    return cy.get(".btn-login");
  }

  validarLogin() {
    return cy.url().should("include", "https://www.superbid.net");
  }
}
export default new login();
