import { Given, When, And } from "cypress-cucumber-preprocessor/steps";
import consultaPorEventoCarros from "../../../poo/consultaPorEventoCarros.po";

Given("que o usuário acessa a tela inicial", () => {
  cy.visit(Cypress.env("BASE_URL"));
});
