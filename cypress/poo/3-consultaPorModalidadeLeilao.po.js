class consultaPorModalidadeLeilao {
  selecionaMenuCategoria() {
    return cy.get('[data-auction-category="Tecnologia"]').click();
  }

  selecionaModalidadeLeilao() {
    return cy.get('input[type="radio"][value="leilao"]').click({ force: true });
  }

  validaModalidadeLeilao() {
    return cy.get('input[type="radio"][value="leilao"]').should("be.checked");
  }
}
export default new consultaPorModalidadeLeilao();
