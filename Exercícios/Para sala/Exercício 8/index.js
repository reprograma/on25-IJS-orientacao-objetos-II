class Ingresso{
    lote;
    preco_promocional = 10;
    preco_primeiro_lote = 20;
    preco_segundo_lote = 30;
    preco_terceiro_lote = 40;

constructor(lote){
    this.lote = lote;
}

   mostrarPreco(){
    if(this.lote === 'promocional'){
        console.log(`Preço do ingresso: R$ ${this.preco_promocional},00 - Lote Promocional`)
    }else if(this.lote === 'primeiro') {
        console.log(`Preço do ingresso: R$ ${this.preco_primeiro_lote},00 - Primeiro Lote`)
    }else if(this.lote === 'segundo'){
        console.log(`Preço do ingresso: R$ ${this.preco_segundo_lote},00 - Segundo Lote`)
    }else if(this.lote === 'terceiro'){
        console.log(`Preço do ingresso: R$ ${this.preco_terceiro_lote},00 - Terceiro Lote`)
    } else{
        console.log('Lote não encontrado')
    }
     
   }
}

class IngressoNormal extends Ingresso{
    mostrarPreco(){
        console.log('INGRESSO NORMAL')
        super.mostrarPreco()
    }
}

class IngressoVIP extends Ingresso{
    preco_promocional = 50;
    preco_primeiro_lote = 60;
    preco_segundo_lote = 70;
    preco_terceiro_lote = 80;

    mostrarPreco(){
        console.log('INGRESSO VIP')
        super.mostrarPreco()
    }
}

const ingressoNormalMichele = new IngressoNormal('promocional')
ingressoNormalMichele.mostrarPreco() // INGRESSO NORMAL Preço do ingresso: R$ 10,00 - Lote Promocional

const IngressoVIPMaite = new IngressoVIP('terceiro')
IngressoVIPMaite.mostrarPreco() // INGRESSO VIP Preço do ingresso: R$ 80,00 - Terceiro Lote