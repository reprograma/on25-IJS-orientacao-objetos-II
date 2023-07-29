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

  get id(){
    return this.#id
  }

  get description(){
    return this.#description
  }

  get quantity(){
    return this.#quantity
  }
  
  get unityPrice(){
    return this.#unityPrice
  }

  set quantity(newQuantity){
    this.#quantity = newQuantity
  }

  set unityPrice(newUnityPrice){
    this.#unityPrice = newUnityPrice
  }

  get total(){
    return this.#quantity * this.#unityPrice
  }

  toString(){
    const phrase = `InvoiceItem[id = ${this.#id}, description = ${this.#description}, quantity = ${this.#quantity}, unitPrice = ${this.#unityPrice}, total = $${this.total}]`;

    return phrase;
  }
}

const item1 = new InvoiceItem(1, "shampoo", 3, 35.5);
console.log(item1);
item1.unityPrice = 40;
console.log(`Unity price: $${item1.unityPrice}`);
console.log(`Total price: $${item1.total}`);
console.log(item1.toString());