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

    get Desc(){
        return this.#description
    }

    get Qty(){
        return this.#quantity
    }

    set Qty(qty){
        this.#quantity += qty // eu fiz assim, a profa fez o de baixo pq normalmente set é pra atribuit mesmo
    }

    /* set quantity(newQty) {
        this.#quantity = newQty
    } */ 
    // se fosse somar faria um invoiceItem1.quantity =+ 2


    get unityPrice(){
        return this.#unityPrice
    }

    set unityPrice(newUnitPrice){
        this.#unityPrice = newUnitPrice
    }

    get total(){
        return this.#unityPrice * this.#quantity
    }

    toString(){
        return `Invoice Item [ID: ${this.#id}, Description: ${this.#description}, Quantity: ${this.#quantity}, Unity Price: ${this.#unityPrice}, Total:${this.total}] `
    }
}

const invoiceItem1 = new InvoiceItem(1, "descrição", 10, 2)
console.log(invoiceItem1)
console.log(invoiceItem1.ID) // tá chamando o get e não a propriedade
console.log(invoiceItem1.Desc)
console.log(invoiceItem1.Qty)
console.log(invoiceItem1.unityPrice)

invoiceItem1.Qty = 2 // chamando o set
console.log(invoiceItem1.Qty)

invoiceItem1.unityPrice = 15
console.log(invoiceItem1.unityPrice)

console.log(invoiceItem1.total)

console.log(invoiceItem1.toString()) // chamando a função toString()