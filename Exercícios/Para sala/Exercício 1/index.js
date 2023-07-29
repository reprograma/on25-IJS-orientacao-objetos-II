class InvoiceItem {
  #id;
  #description;
  #quantity;
  #unityPrice;
  constructor(id, description, quantity, unityPrice) {
    this.#id = id;
    this.#description = description;
    this.#quantity = quantity;
    this.#unityPrice = unityPrice;
  }
  get id() {
    return this.#id;
  }
  get desc() {
    return this.#description;
  }
  get qty() {
    return this.#quantity;
  }
  set qty(newQuantity) {
    this.#quantity = newQuantity;
  }
  get unityPrice() {
    return this.#unityPrice;
  }
  set unityPrice(newPrice) {
    this.#unityPrice = newPrice;
  }
  get total() {
    return `Total: R$ ${parseFloat(this.#unityPrice) * this.#quantity}`;
  }
  toString() {
    console.log(
      `ID: ${this.#id} - Description: ${this.#description} - Quantity: ${
        this.#quantity
      } - Price: R$ ${this.#unityPrice}`
    );
  }
}

let item1 = new InvoiceItem(254654131, "Caderno", parseInt(1), 10.5);
item1.qty = 2;
item1.unityPrice = 19.8;
item1.toString;
console.log(item1.total);
