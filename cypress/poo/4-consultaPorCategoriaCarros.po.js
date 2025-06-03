class consultaPorCategoriaCarros {
  selecionaMenuCategoria() {
    return cy.get('[data-auction-category="Carros & Motos"]').click();
  }

  selecionaSubCategoria() {
    return cy.get("#btn-subcat-carros").click();
  }

  validaSubCategoriaCarros() {
    return cy.get("#newChip").should("have.text", "Carros");
  }
}
export default new consultaPorCategoriaCarros();
