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

  get description() {
    return this.#description;
  }

  get quantity() {
    return this.#quantity;
  }

  get unityPrice() {
    return this.#unityPrice;
  }
  get total() {
    return this.#unityPrice * this.#quantity;
  }

  set quantity(newQuantity) {
    this.#quantity = newQuantity;
  }

  set unityPrice(newUnityPrice) {
    this.#unityPrice = newUnityPrice;
  }

  imprimirNoConsole() {
    console.log(
      `id: ${this.#id}, quantity: ${this.#quantity}, unityPrice: ${
        this.#unityPrice
      }, total ${this.total}`
    );
  }
}
