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
  
    set quantity(newQuantity) {
      this.#quantity = newQuantity;
    }
  
    get unityPrice() {
      return this.unityPrice;
    }
  
    set unityPrice(newPrice) {
      this.#unityPrice = newPrice;
    }
    get total() {
      return this.#unityPrice * this.#quantity;
    }
  
    // toString() esse nome é de uma função criada aqui no exercicio, não tem nada have com o método toString() do  JS

    printAsString(){
      console.log(
        `Id: ${this.#id}, quantity: ${this.#quantity}, description ${
          this.#description
        } unityPrice: ${this.#unityPrice}`
      );
    }
  }
  
  const invoice1 = new InvoiceItem(1, 2000, "headphone", 400);
  invoice1.toString()