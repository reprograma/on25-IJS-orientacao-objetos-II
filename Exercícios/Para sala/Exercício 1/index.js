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
    return this.#id
  }

  get description() {
    return this.#description
  }

  get quantity() {
    return this.#quantity
  }

  set quantity(qty) {
    this.#quantity = qty
  }

  get unityPrice() {
    return this.#unityPrice
  }

  set unityPrice(unityPrice) {
    this.#unityPrice = unityPrice
  }

  get total() {
    return this.#unityPrice * this.#quantity
  }

  toString() {
    return `id: ${this.#id}, desc: ${this.#description}, qty: ${this.#quantity}, unityPrice: ${this.#unityPrice}`
  }
}

const item = new InvoiceItem(1, "Thermos bottle", 3, 5.50)

console.log({
  id: item.id,
  desc: item.description,
  qty: item.quantity,
  unityPrice: item.unityPrice,
  total: item.total,
  newQty: item.quantity = 4,
  newUnityPrice: item.unityPrice = 6.70,
  newTotal: item.total,
  toString: item.toString()
})