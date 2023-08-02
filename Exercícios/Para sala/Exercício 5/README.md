# Exercício de Sala 🏫  

- Conteúdo teórico: 
[Herança](../../../6.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20II/6.1%20-%20Heran%C3%A7a.md)

## Exercício 5

Crie uma classe `Ingresso`.

Essa classe deve possuir os atributos:
- [ ] `Lote`, que será recebido no construtor e pode receber um dos valores:
  - [ ] `'promocional'`: Lote promocional
  - [ ] `'primeiro'`: Primeiro lote
  - [ ] `'segundo'`: Segundo lote
  - [ ] `'terceiro'`: Terceiro lote

- [ ] `Preco`, que será o valor do ingresso de acordo com o lote. Esse atributo **não** será recebido no constructor.

Crie um método `mostrarPreco` que mostra na console o preço do ingresso, de acordo com o lote daquele ingresso.

Teste o que foi criado até o momento.

Agora, crie uma classe `IngressoNormal`, que é herdeira da classe `Ingresso`.

Agora, crie uma classe `IngressoVIP` que é herdeira da classe `Ingresso` e deverá ter preços mais caros para cada lote.
Essa classe não precisará de nenhum construtor nem método, mas os preços exibidos devem ser diferentes (mais caros) daqueles da classe `Ingresso`.

Teste o que foi criado.
