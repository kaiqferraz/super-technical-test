Feature: Consulta os eventos da categoria Carros
    Scenario: Realizar a consulta dos eventos da categoria Carros

        Given que o usuário acessa a tela inicial
        And aceita os cookies e fecha o iframe de oportunidades
        When Realiza uma busca pela categoria Carros & Motos
        And seleciona a subcategoria Carros
        Then o sistema deve exibir os resultados filtrados pela categoria escolhida