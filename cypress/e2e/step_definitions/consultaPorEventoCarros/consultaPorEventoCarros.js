import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import consultaPorEventoCarros from "../../../poo/consultaPorEventoCarros.po";

Given("que o usuário acessa a tela inicial", () => {
  cy.visit(Cypress.env("BASE_URL"));
});

When("o usuário aceita todos os cookies", () => {
  cy.wait(2000);
  consultaPorEventoCarros.aceitaCookies();
});

And("fecha a tela de oportunidades", () => {
  cy.wait(2000);
  consultaPorEventoCarros.fechaIframeOportunidades();
});

When("o usuário digita Carros no campo de busca", () => {
  consultaPorEventoCarros.realizaPesquisa().type("Carros");
});

And("clica no botão de pesquisa", () => {
  consultaPorEventoCarros.btnPesquisar();
});

And("o usuario acessa o primeiro evento da lista", () => {
  consultaPorEventoCarros.consultaEvento();
});

Then("o sistema deve exibir os dados do evento selecionado", () => {
  cy.wait(2000);
  consultaPorEventoCarros.validaTelaEvento();
});
