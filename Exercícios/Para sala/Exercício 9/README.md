# Exercício de Sala 🏫  

- Conteúdo teórico: 
[Herança](../../../6.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20II/6.1%20-%20Heran%C3%A7a.md) e [Polimorfismo](../../../6.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20II/6.2%20-%20Polimorfismo.md)

## Exercício 9

1 - Crie uma classe `Funcionario`. O Funcionario possui:
- [ ] `nome`, recebido na instanciação
- [ ] `cpf`, recebido na instanciação
- [ ] `salario`, recebido na instanciação
- [ ] `aumento`, que deve ser igual a 10%, inicializado dentro da classe

Escreva um método `receberAumento()` que calcula e exibe o novo salário.
Escreva um método `exibirDados()` que imprime os dados na console (exceto o aumento), cada um em uma linha.

2 - Agora, crie uma classe `Gerente`, herdando de `Funcionario`.
- [ ] O gerente possui um atributo `nivelGerencia` (Junior, Pleno ou Senior), recebido na instanciação.
- [ ] Além disso, o aumento do gerente é de 15%.
- [ ] Atualize o método `exibirDados()` para imprimir também o `nivelGerencia`.

3 - Crie uma classe `Assistente`, herdando de `Funcionario`.
- [ ] O assistente possui um atributo `matricula`, recebida na instanciação.
- [ ] Atualize o método `exibirDados()` para imprimir também a `matricula`.

4 - Crie uma classe `AssistenteTecnico`, herdando de `Assistente`.
- [ ] O assistente técnico possui um atributo `bonusSalarial`, recebido na instanciação.
- [ ] Atualize o método `exibirDados()` para imprimir também o `bonusSalarial`.

5 - Crie uma classe `AssistenteAdministrativo`, herdando de `Assistente`.
- [ ] O assistente administrativo possui um atributo `turno` (dia ou noite) e um atributo `adicionalNoturno`, recebidos na instanciação.
- [ ] Atualize o método `exibirDados()` para imprimir também o `turno` e o `adicionalNoturno` (apenas se o turno for noite).

Teste tudo o que foi criado.