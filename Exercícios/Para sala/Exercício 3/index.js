class Mae {
  nome;
  nacionalidade;
  corDosOlhos;
  corDoCabelo;

  constructor(nome, nacionalidade,corDosOlhos, corDoCabelo) {
    this.nome = nome;
    this.nacionalidade = nacionalidade;
    this.corDosOlhos = corDosOlhos; 
    this.corDoCabelo = corDoCabelo;
  }
  mostrarCaracteristicas() {
    console.log(`Essa pessoa é ${this.nacionalidade}, tem cor dos olhos: ${this.corDosOlhos} e cor do cabelo: ${this.corDoCabelo}` )
  }
}

class Filha extends Mae {
}

const tania = new Mae ("Tania", "Brasileira", "castanhos", "pretos");

const laissa = new Filha("Laíssa", "Brasileira", "castanhos", "castanhos escuros")

console.log(tania);
console.log(laissa);
