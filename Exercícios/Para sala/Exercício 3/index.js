class Mae {
  nacionalidade;
  corDosOlhos;
  corDoCabelo;

  constructor(nacionalidade,corDosOlhos, corDoCabelo) {
    this.nacionalidade = nacionalidade
    this.corDosOlhos = corDosOlhos
    this.corDoCabelo =corDoCabelo
  }

  mostrarCaraxterísticas() {
    console.log(`
    nacionalidade: ${this.nacionalidade},
    corDosOlhos: ${this.corDosOlhos},
    corDoCabelo: ${this.corDoCabelo}
    `)
  }
}

class Filha extends Mae {}

const
  mae = new Mae("brasileira", "castanho", "castanho"),
  filha = new Filha("italiana", "loira", "castanho")

mae.mostrarCaraxterísticas()
filha.mostrarCaraxterísticas()
