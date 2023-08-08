class Ingresso {
  lote;
  preco = 0;

  constructor(lote) {
    this.lote = lote
  }

  mostrarPreco() {
    if(this.lote === 'promocional') {
      console.log(this.preco += 2.2)
    } else if(this.lote === 'primeiro') {
      console.log(this.preco += 4.2)
    } else if(this.lote === 'segundo') {
      console.log(this.preco += 6.2)
    } else if(this.lote === 'terceiro') {
      console.log(this.preco += 8.2)
    } else {
      console.log('Ingresso indisponível')
    }
  }
}

const ingressoPromo = new Ingresso('promocional')
ingressoPromo.mostrarPreco()
const ingressoPrim = new Ingresso('primeiro')
ingressoPrim.mostrarPreco()
const ingressoSeg = new Ingresso('segundo')
ingressoSeg.mostrarPreco()
const ingressoTerc = new Ingresso('terceiro')
ingressoTerc.mostrarPreco()
const ingressoQuar = new Ingresso('quarto')
ingressoQuar.mostrarPreco()

class IngressoNormal extends Ingresso {}

class IngressoVIP extends Ingresso {
  preco = this.preco + 2
}

const ingressoVIPPromo = new IngressoVIP('promocional')
ingressoVIPPromo.mostrarPreco()
const ingressoVIPPrim = new IngressoVIP('primeiro')
ingressoVIPPrim.mostrarPreco()
const ingressoVIPSeg = new IngressoVIP('segundo')
ingressoVIPSeg.mostrarPreco()
const ingressoVIPTerc = new IngressoVIP('terceiro')
ingressoVIPTerc.mostrarPreco()
const ingressoVIPQuar = new IngressoVIP('quarto')
ingressoVIPQuar.mostrarPreco()
