class consultaPorEventoCarros {
  aceitaCookies() {
    return cy.get("#onetrust-accept-btn-handler").click();
  }

  fechaIframeOportunidades() {
    return cy.get(".gcap-close").click();
  }

  realizaPesquisa() {
    return cy.get("#search-input-field");
  }

  btnPesquisar() {
    return cy.get("[id*='search-button-submit']").should("be.visible").click();
  }

  consultaEvento() {
    cy.get('[data-auction-position="1"]').click();
  }

  validaTelaEvento() {
    cy.get("#habilitese").should("be.visible");
  }
}
export default new consultaPorEventoCarros();
