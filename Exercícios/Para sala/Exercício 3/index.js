class Mae {
    nacionalidade;
    corDosOlhos;
    corDoCabelo;

constructor(nacionalidade, corDosOlhos, corDoCabelo) {
    this.nacionalidade = nacionalidade;
    this.corDosOlhos = corDosOlhos;
    this.corDoCabelo = corDoCabelo
};

mostrarCaracteristicas() {
    console.log(`A nacionalidade ${this.nacionalidade} tem olhos da cor ${this.corDosOlhos}, cabelos ${this.corDoCabelo}`);
  }
}
const mae1 = new Mae("espanhola", "castanho", "preto");

mae1.mostrarCaracteristicas()

class Filha extends Mae {}

const alessandra = new Filha("italiana", "azul", "loiro");
alessandra.mostrarCaracteristicas();

const elvira = new Filha("italiana", "castanho", "castanho");
elvira.mostrarCaracteristicas();

class Neta extends Filha {
    constructor(nacionalidade, corDosOlhos, corDoCabelo, idade) {
        super(nacionalidade, corDosOlhos, corDoCabelo);
        this.idade = idade;
}}

const giovana = new Neta("brasileira", "azul", "vermelho", 23);
giovana.mostrarCaracteristicas()
console.log(giovana)