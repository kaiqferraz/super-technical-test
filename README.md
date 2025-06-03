# superbid-technical-test

Projeto de automação de testes utilizando [Cypress](https://www.cypress.io/) com Cucumber.

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão recomendada: 16.x ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 💻 Instalação

1. Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/superbid-technical-test.git
cd superbid-technical-test
npm install
```

2. ⚙️ Configuração

### Antes de executar os testes, é necessário alterar as credenciais de login no arquivo cypress.env.json:

```
{
  "LOGIN_USER": "seu_usuario_aqui",
  "LOGIN_PASSWORD": "sua_senha_aqui"
}
```

### ⚠️ Atenção: Nunca compartilhe suas credenciais reais em repositórios públicos.

## 🚀 Como executar os testes

## Abra o Cypress com o comando:

```
npm run cypress:open
```

## Escolha o teste desejado na interface do Cypress.

## 📂 Estrutura do Projeto

```
cypress/e2e/step_definitions/: Features e steps dos testes em Cucumber.

cypress/poo/: Page Objects para facilitar a manutenção dos testes.

cypress/support/: Comandos customizados e configurações globais.
```

## Tecnologias Utilizadas 🛠️

_Cypress:_ Framework de automação de testes.

_Cypress Cucumber Preprocessor:_ Suporte a BDD com Gherkin.

_JavaScript:_ Linguagem de programação utilizada no projeto.

## _Autor:_ Kaique Ferraz da Silva
