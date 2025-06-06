Cypress.Commands.add("fecharIframes", () => {
  cy.get("#onetrust-accept-btn-handler").click(); // Aceita todos os cookies
  cy.wait(3000);
  cy.get(".gcap-close").click(); // Fecha a tela de oportunidades
});
