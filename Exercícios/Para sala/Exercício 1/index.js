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

    set qty(quantity) {
       this.#quantity = quantity;
    }

    get unityPrice() {
        return this.#unityPrice;
    }
    
    set unityPrice(unityPrice) {
        this.#unityPrice = unityPrice;
    }

    get total() {
        return this.#unityPrice * this.#quantity;
    }

    toString() {
        console.log("id", this.#id);
        console.log("description", this.#description);
        console.log("quantity", this.#quantity);
        console.log("unity price", this.#unityPrice);
    }

  }