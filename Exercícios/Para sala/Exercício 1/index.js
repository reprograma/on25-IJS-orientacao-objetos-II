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

    get ID() {
        return this.#id
    }

    get Description() {
        return this.#description
    }

    get Quantity() {
        return this.#quantity
    }

    set Quantity(value) {
        this.#quantity = value
    }

    get UnityPrice() {
        return this.#unityPrice
    }

    set UnityPrice(price) {
        this.#unityPrice = price
    }

    get Total() {
        const total = this.#quantity * this.#unityPrice
        return total
    }

    toString() {
        console.log (this.#id) 
        console.log(this.#description)
        console.log( this.#quantity)
        console.log( this.#unityPrice)
    }

}

const item = new InvoiceItem (1, 'mochila', 1, 10)

item.toString()