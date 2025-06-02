import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../../poo/login.po";

Given("que o usuário acessa a página inicial", () => {
  cy.visit(Cypress.env("LOGIN_URL"));
});

When("o usuário preenche o campo Login com um valor válido", () => {
  login.insereLogin().type(Cypress.env("LOGIN_USER"));
});

And("preenche o campo Senha com a senha correspondente", () => {
  login.inserePassword().type(Cypress.env("LOGIN_PASSWORD"));
});

And("clica no botão Entrar", () => {
  login.btnEntrar().click();
});

Then(
  "o sistema deve autenticar o usuário e redirecionar para a página inicial logada",
  () => {
    login.validarLogin();
  }
);
