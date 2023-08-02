class Ingresso {
    preco = 10

    mostrarPreco(){
        console.log(`O preço é ${this.preco}`)
    }

    
}

class IngressoNormal extends Ingresso {}

class IngressoVip extends Ingresso {
    preco = this.preco + 50 // não estamos herdando o preço pq queremos que o preço seja fixo em ambos os ingressos
    // se não podia ser preco = this.preco + 20

}

const ingresso1 = new Ingresso()
console.log(ingresso1.preco)
ingresso1.mostrarPreco()

const ingresso2 = new IngressoVip()
console.log(ingresso2.preco)
ingresso2.mostrarPreco()