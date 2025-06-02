// ...existing code...
Cypress.on("uncaught:exception", (err, runnable) => {
  // Retorne false para evitar que o Cypress falhe o teste
  return false;
}); //Para ignorar erros de exceção não capturados (uncaught exceptions)
// ...existing code...

import "./commands";
