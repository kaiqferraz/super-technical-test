Feature: Consulta os eventos por modalidade Leilão
    Scenario: Realizar a consulta dos eventos por modalidade Leilão

        Given que o usuário acessa a tela inicial
        And aceita os cookies e fecha o iframe de oportunidades
        When Realiza uma busca com a categoria Tecnologia
        And seleciona a modalidade Leilão
        Then o sistema deve exibir os resultados filtrados pela modalidade escolhida