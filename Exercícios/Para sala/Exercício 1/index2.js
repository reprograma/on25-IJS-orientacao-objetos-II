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

    set quantity(newQuantity){ 
        this.#quantity = newQuantity
    }

    get unityPrice(){
        return this.#unityPrice
    }

    set unityPrice(newUnityPrice) {
        this.#unityPrice = newUnityPrice
    }

    get total(){
        return this.#unityPrice * this.#quantity
    }

    toString(){
        console.log(`id: ${id}, description: ${this.#description}, quantity: ${this.#quantity}, unityPrice: ${this.#unityPrice}, total: ${this.total}`)
    }

  }

const item = new InvoiceItem(1, "Produto A", 5, 10.90);


console.log(item.id);
console.log(item.description);
console.log(item.quantity);
console.log(item.unityPrice);
console.log(item.total);

