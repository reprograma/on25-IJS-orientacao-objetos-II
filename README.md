<div align="center">

  ![Logo Dark](assets/reprograma-fundos-escuros.svg#gh-dark-mode-only)

</div>

<div align="center">

  ![Logo Light](assets/reprograma-fundos-claros.png#gh-light-mode-only)

</div>

___

# Tema da Aula

Turma Online 25 - Imersão JavaScript | Semana 6 - Introdução à Orientação a Objeto II | 2023 | Professora: [Luara Kerlen](https://github.com/luarakerlen)

### Instruções

Antes de começar, vamos organizar nosso setup.

- Fork esse repositório
- Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
- Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

### Objetivo

- Introduzir o conceito de paradigma de programação;
- Entender o que são classes e objetos e qual é a diferença entre os dois conceitos.

### Resumo

O que veremos na aula de hoje?

- [Tema da Aula](#tema-da-aula)

  - [Instruções](#instruções)
  - [Objetivo](#objetivo)
  - [Resumo](#resumo)

- [Conteúdo](#conteúdo)

  - [Recapitulando](#recapitulando)

    - [Estrutura da POO](#estrutura-da-poo)
    - [Os 4 pilares da POO](#os-4-pilares-da-poo)
      - [Abstração](#abstração)
      - [Encapsulamento](#encapsulamento)

  - [Pilares de OO - Herança](./6.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20II/6.1%20-%20Heran%C3%A7a.md)
  - [Pilares de OO - Polimorfismo](./6.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20II/6.2%20-%20Polimorfismo.md)

- [Exercícios](#exercícios)
- [Material da aula](#material-da-aula)
- [Links Úteis](#links-úteis)
- [Contatos](#contatos)

# Conteúdo

## Recapitulando...
A programação orientada a objetos é um paradigma de programação que fornece um modelo no qual um programa é uma coleção de objetos que interagem entre si, passando mensagens que transformam seu estado.

Neste caso, todos os objetos possuem determinados estados e comportamentos. Enquanto os estados são descritos pelas classes como **atributos**, a forma como eles se comportam é definida por meio de **métodos**. 

### Estrutura da POO
A Programação Orientada a Objetos possui dois pilares de sustentação: a utilização de classes e objetos.
Além de possuírem, dentro dessas, atributos e métodos.

As **classes** são formas de definir objetos que serão reutilizados e instanciados durante o código.

Os **objetos** são instâncias de classes criadas com dados específicos.

Enquanto classes são como definições do conceito de uma entidade do mundo real, objetos são a representação de um exemplar da entidade.

**Atributos** são as *características* que as classes (e, por consequência, seus objetos) possuem.

**Métodos** são as *funções* que a classe (e, por consequência, seus objetos) possuem.

**Métodos e atributos privados** são aqueles que ficam acessíveis apenas dentro da classe. Para isso, utilizamos `#` antes do nome. Além disso, temos os métodos `get` e `set` que nos auxiliam a acessar ou alterar atributos privados de uma maneira controlada e segura.

**Métodos e atributos estáticos** são aquelas que pertencem à classe, não aos objetos instanciados a partir dela. Para isso, utilizamos a palavra-chave `static`.

Exemplo:
```javascript
class Funcionario {
  nome;
  #salario;

  static funcionarios = [];

  constructor(nome, salario) {
    this.nome = nome;
    this.#salario = salario;
    this.constructor.funcionarios.push(this.nome);
  }

  get salario() {
    return this.#salario;
  }

  set salario(novoSalario) {
    this.#salario = novoSalario;
  }

  receberBonusMensal(bonus) {
    //..
  }

  #receberAumento(aumento) {
    //...
  }

  static removerFuncionario(funcionario) {
    //...
  }
}
```

### Os 4 pilares da POO
Na prática, para a POO funcionar, ela precisa utilizar de 4 pilares básicos. São eles:
- Abstração
- Encapsulamento
- Herança
- Polimorfismo

#### Abstração
Abstrair algo significa esconder os detalhes da implementação dentro de algo.

Na Orientação a Objetos, a abstração consiste em extrair entidades do mundo real para dentro do código seguindo a fio suas responsabilidades.

Na POO, podemos utilizar diagrama de classe em UML para representar as nossas classes de uma maneira simples, abstraindo as implementações:

<div style="text-align:center;">
  <img src="https://github.com/reprograma/on25-IJS-orientacao-objetos-I/assets/26902816/af4931f0-f032-43fa-acf8-4efc2cdf61dd" width="300px" />
</div>

#### Encapsulamento
Quando definimos os atributos de um objeto, devemos garantir que alterar os valores desses atributos sejam responsabilidade exclusiva do próprio objeto. O encapsulamento, portanto, é o conceito de proteger os atributos de um objeto.

Para que isso seja possível, podemos utilizar o conceito de métodos e atributos privados, dando acesso de leitura e edição apenas quando fizer sentido e para quem tiver permissão. Nesse caso, utilizamos os métodos `get` e `set`.

```javascript
class Funcionario {
  nome;
  #salario;
  #temPermissao;

  constructor(nome, salario, temPermissao) {
    this.nome = nome;
    this.#salario = salario;
    this.#temPermissao = temPermissao;
  }

  get salario() {
    if(this.temPermissao) {
      return this.#salario;
    }
  }

  set salario(novoSalario) {
    if(this.temPermissao) {
      this.#salario = novoSalario;
    }
  }
}
```

#### → Vamos aplicar?
- [ ] [Exercício 1](./Exerc%C3%ADcios/Para%20sala/Exerc%C3%ADcio%201/)
- [ ] [Exercício 2](./Exerc%C3%ADcios/Para%20sala/Exerc%C3%ADcio%202/)

## [Pilares de OO - Herança](./6.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20II/6.1%20-%20Heran%C3%A7a.md)

## [Pilares de OO - Polimorfismo](./6.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20II/6.2%20-%20Polimorfismo.md)

### Exercícios

- [Exercício para sala](./Exerc%C3%ADcios/Para%20sala/)
- [Exercício para casa](./Exerc%C3%ADcios/Para%20casa/)

### Material da aula

- [Material](./6.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20II/)

### Links Úteis
<!-- - [Javascript.info - Array methods](https://javascript.info/array-methods)
- [Mozilla - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) -->

### Contatos da prô

- [LinkedIn](https://www.linkedin.com/in/luarakerlen/)
- [Github](https://github.com/luarakerlen)
- [Instagram](https://www.instagram.com/luaratech/)

<p align="center">
  Desenvolvido com &#128156 por Luara Kerlen
</p>
