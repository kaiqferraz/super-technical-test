Feature: Login com Sucesso
    Scenario: Realizar login com sucesso

        Given que o usuário acessa a página inicial
        When o usuário preenche o campo Login com um valor válido
        And preenche o campo Senha com a senha correspondente
        And clica no botão Entrar
        Then o sistema deve autenticar o usuário e redirecionar para a página inicial logada