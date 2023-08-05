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

    set quantity(newQuantity) {
        this.#quantity = newQuantity
    }
    
    get unitPrice() {
        return this.#unityPrice
    }

    set unityPrice(newUnityPrice) {
        this.#unityPrice = newUnityPrice
    }

    get total() {
        return this.#quantity * this.#unityPrice
    }

    toString() {
        return console.log(`Id: ${this.#id}, Descrição: ${this.#description}, Quantity: ${this.#quantity}, Unity Price: ${this.#unityPrice}`)
    }
  }