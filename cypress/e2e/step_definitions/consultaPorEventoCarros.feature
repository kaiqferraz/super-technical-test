Feature: Consulta um evento com o Termo Carros
    Scenario: Realizar a consulta de um evento com o termo Carros

        Given que o usuário acessa a tela inicial
        When o usuário aceita todos os cookies
        And fecha a tela de oportunidades
        When o usuário digita Carros no campo de busca
        And clica no botão de pesquisa
        And o usuario acessa o primeiro evento da lista
        Then o sistema deve exibir os dados do evento selecionado
