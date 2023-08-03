class Ticket {
  lot;
  price_promo = 10;
  price_one = 20;
  price_two = 30;
  pricce_three = 40;

  constructor(lot) {
    this.lot = lot;
  }
  showPrice() {
    if (this.lot === "promo") {
      console.log(`Preço do ingresso: R$ ${this.price_promo}`);
    } else if (this.lot === "one") {
      console.log(`Preço do ingresso: R$ ${this.price_one}`);
    } else if (this.lot === "two") {
      console.log(`Preço do ingresso: R$ ${this.price_two}`);
    } else if (this.lot === "three") {
      console.log(`Preço do ingresso: R$ ${this.price_three}`);
    } else {
      console.log(`Lote não encontrado.`);
    }
  }
}

class NormalTicket extends Ticket {}
class VipTicket extends Ticket {
    price_promo = 50;
    price_one = 60;
    price_two = 70;
    pricce_three = 80;
}

const ticket1 = new Ticket("promo");
const ticket2 = new NormalTicket("two");
const ticket3 = new VipTicket("two");
ticket1.showPrice();
ticket2.showPrice();
ticket3.showPrice();
