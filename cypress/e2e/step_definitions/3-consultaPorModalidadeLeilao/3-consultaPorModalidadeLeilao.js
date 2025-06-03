import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import consultaPorModalidadeLeilaoPo from "../../../poo/3-consultaPorModalidadeLeilao.po";

Given("que o usuário acessa a tela inicial", () => {
  cy.visit(Cypress.env("BASE_URL"));
});

And("aceita os cookies e fecha o iframe de oportunidades", () => {
  cy.wait(2000);
  cy.fecharIframes();
});

When("Realiza uma busca com a categoria Tecnologia", () => {
  consultaPorModalidadeLeilaoPo.selecionaMenuCategoria();
});

And("seleciona a modalidade Leilão", () => {
  consultaPorModalidadeLeilaoPo.selecionaModalidadeLeilao();
});

Then(
  "o sistema deve exibir os resultados filtrados pela modalidade escolhida",
  () => {
    consultaPorModalidadeLeilaoPo.validaModalidadeLeilao();
  }
);
