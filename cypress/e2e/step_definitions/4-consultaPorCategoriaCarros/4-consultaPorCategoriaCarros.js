import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import consultaPorCategoriaCarros from "../../../poo/4-consultaPorCategoriaCarros.po";

Given("que o usuário acessa a tela inicial", () => {
  cy.visit(Cypress.env("BASE_URL"));
});

And("aceita os cookies e fecha o iframe de oportunidades", () => {
  cy.wait(2000);
  cy.fecharIframes();
});

When("Realiza uma busca pela categoria Carros & Motos", () => {
  consultaPorCategoriaCarros.selecionaMenuCategoria();
});

And("seleciona a subcategoria Carros", () => {
  consultaPorCategoriaCarros.selecionaSubCategoria();
});

Then(
  "o sistema deve exibir os resultados filtrados pela categoria escolhida",
  () => {
    consultaPorCategoriaCarros.validaSubCategoriaCarros();
  }
);
