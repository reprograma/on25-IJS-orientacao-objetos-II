class Mae {
  nacionalidade;
  corDosOlhos;
  corDocabelo;

  constructor(nacionalidade, corDosOlhos, corDocabelo) {
    this.nacionalidade = nacionalidade;
    this.corDocabelo = corDocabelo;
    this.corDosOlhos = corDosOlhos;
  }

  mostrarCaracterísticas() {
    console.log(`A nacionalidade é: ${this.nacionalidade}, a cor dos olhos é: ${this.corDosOlhos}, a 
    cor do cabelo é ${this.corDocabelo}`);
  }
}

const m1 = new Mae("brasileira", "preta", "castanho");
m1.mostrarCaracterísticas();

class Filha extends Mae {}
const f1 = new Filha("br", "castanho", "loira");
f1.mostrarCaracterísticas();
