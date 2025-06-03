import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import consultaPorEventoCarros from "../../../poo/2-consultaPorEventoCarros.po";

Given("que o usuário acessa a tela inicial", () => {
  cy.visit(Cypress.env("BASE_URL"));
});

And("aceita os cookies e fecha o iframe de oportunidades", () => {
  cy.wait(4000);
  cy.fecharIframes();
});

When("realiza uma busca pelo termo Carros", () => {
  consultaPorEventoCarros.realizaPesquisa().type("Carros");
  consultaPorEventoCarros.btnPesquisar();
});

And("acessa o primeiro evento listado", () => {
  consultaPorEventoCarros.consultaEvento();
});

Then("o sistema deve exibir os dados do evento selecionado", () => {
  cy.wait(4000);
  consultaPorEventoCarros.validaTelaEvento();
});
