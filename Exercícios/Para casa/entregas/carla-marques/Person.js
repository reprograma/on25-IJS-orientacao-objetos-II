// ### Person
// Crie uma Classe `Person` que terá os seguintes atributos:
// - [ ] `name`, recebido por instanciação
// - [ ] `#cpf`, privado, recebido por instanciação e com um método get

class Person {
  #cpf;
  constructor(name, cpf) {
    this.name = name;
    this.#cpf = cpf;
  } 
  get cpf() {
    return this.#cpf;
  }
}

module.exports = { Person };