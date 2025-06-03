Feature: Consulta um evento com o Termo Carros
    Scenario: Realizar a consulta de um evento com o termo Carros

        Given que o usuário acessa a tela inicial
        And aceita os cookies e fecha o iframe de oportunidades
        When realiza uma busca pelo termo Carros
        And acessa o primeiro evento listado
        Then o sistema deve exibir os dados do evento selecionado
