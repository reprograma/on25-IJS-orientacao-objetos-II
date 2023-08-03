class Ticket {
  price = 10;
  showPrice() {
    console.log(`Preço do ingresso: R$ ${this.price}`);
  }
}
class NormalTicket extends Ticket {}
class VipTicket extends Ticket {
    price = 50;
}

const ticket1 = new Ticket();
const ticket2 = new NormalTicket();
const ticket3 = new VipTicket();
ticket1.showPrice();
ticket2.showPrice();
ticket3.showPrice();
