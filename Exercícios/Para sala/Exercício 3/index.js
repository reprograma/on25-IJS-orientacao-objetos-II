class Mae {
    nacionalidade
    corOlhos
    corCabelos

    constructor (nacionalidade, corOlhos, corCabelos) { //vamos receber os atributos na instanciação
        this.nacionalidade = nacionalidade
        this.corOlhos = corOlhos
        this.corCabelos = corCabelos
    }

    mostrarCaracteristicas() {
        return console.log(`A nacionalidade é ${this.nacionalidade}, a cor dos olhos é ${this.corOlhos} e a cor dos cabelos é ${this.corCabelos}`)
    } // o console.log mostra no terminal, está é função dele
    // já o return dá um retorno dessa frase, mas se você usar só ele não vai aparecer no console
    // por equanto este return não está retornando pra nada
    // mas se fizessemos: 
    // const retorno = return (`frase`) -> aí o return está retornando nessa const
    // console.log(retorno)
    // o ideal é o retornar ou usar o console.log e não como eu fiz com os dois
}

class Filha extends Mae {

}

const mae = new Mae("brasileira", "castanho", "castanho") // instanciando a classe mãe
mae.mostrarCaracteristicas()
const filha = new Filha("brasileira", "castanho", "castanho")
filha.mostrarCaracteristicas()