class Mae {
    nacionalidade
    corDosOlhos
    corDoCabelo

    constructor(nacionalidade, corDosOlhos, corDoCabelo) {
        this.nacionalidade = nacionalidade
        this.corDosOlhos = corDosOlhos
        this.corDoCabelo = corDoCabelo
    }

    mostrarCaracterísticas(){
        console.log(`Essa pessoa é ${this.nacionalidade}, tem olhos ${this.corDosOlhos} e cabelo da cor ${this.corDoCabelo}`)
    }
}

const mae = new Mae("brasileira", "castanhos", "ruivo")
//console.log(mae)
mae.mostrarCaracterísticas()

class Filha extends Mae {}

const filha = new Filha('brasileira', 'pretos', 'castanho')
filha.mostrarCaracterísticas()