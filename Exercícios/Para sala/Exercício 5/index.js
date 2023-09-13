class Ingresso {
  lote;
  preco_promocional = 10;
  preco_primeiro_lote = 20;
  preco_segundoo_lote = 30;
  preco_terceiro_lote = 40;

  constructor(lote) {
    this.lote = lote;
  }

  mostrarPreco() {
    if (this.lote === 'promocional') {
      console.log(`Preço do ingresso: R$${this.preco_promocional}`);
    } else if (this.lote === 'primeiro') {
      console.log(`Preco do ingresso: R$ ${this.preco_primeiro_lote}`);
    } else if (this.lote === 'segundo') {
      console.log(`Preco do ingresso: R$ ${this.preco_segundoo_lote}`);
    } else if (this.lote === 'terceiro') {
      console.log(`preco do ingresso: R$ ${this.preco_terceiro_lote}`);
    } else {
      console.log('Lote não encontrado.');
    }
  }
}

class IngressoNormal extends Ingresso {
  mostrarPreco() {
    console.log('INGRESSO NORMAL');
    super.mostrarPreco();
  }
}

class IngressoVip extends Ingresso {}
