class Ingresso {
  lote;
  preco_promocional = 10;
  preco_primeiro_lote = 20;
  preco_segundo_lote = 30;
  preco_terceiro_lote = 40;

  constructor(lote) {
    this.lote = lote;
  }

  mostarPreco(){
    switch(this.lote) {
      case 'promocional':
       console.log(`Preço do ingresso : R$ ${this.preco_promocional} -  - Lote Promocional`) 
        break;
      case 'primeiro':
        console.log(`Preço do ingresso : R$ ${this.preco_primeiro_lote} - Primeiro Lote`) 
        break;
      case 'segundo':
        console.log(`Preço do ingresso : R$ ${this.preco_segundo_lote} - Segundo Lote`) 
         break;
      case 'terceiro':
        console.log(`Preço do ingresso : R$ ${this.preco_terceiro_lote} - Terceiro Lote`) 
        break;  
      default:
        console.log(`Lote não encontrado`) 
    }
  } 
}

class IngressoNormal extends Ingresso {

  mostarPreco() {
    console.log(`Ingresso Normal`)
    super.mostarPreco();
  }
}

class IngressoVip extends Ingresso {
  preco_promocional = 50;
  preco_primeiro_lote = 60;
  preco_segundo_lote = 70;
  preco_terceiro_lote = 80;

  mostarPreco(){
    console.log(`Ingresso VIP`)
    super.mostarPreco();
  }
}


const tardezinha = new IngressoNormal('primeiro')
console.log(tardezinha.mostarPreco())

const rockInRio = new IngressoVip('primeiro')
console.log(rockInRio.mostarPreco())