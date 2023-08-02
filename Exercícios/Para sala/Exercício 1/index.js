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
        return this.#id;
    }

    get desc(){
        return this.#description;
    }

    get qty(){
        return this.#quantity;
    }

    set qty(newQty){
        this.#quantity = newQty;
    } 

    get unityPrice(){
        return this.#unityPrice;
    }

    set unityPrice(newUnityPrice){
        this.#unityPrice = newUnityPrice;
    } 

    get total(){
        return this.#qty * this.#unityPrice;
    }

    toString(){
        console.log(`id: ${this.#id}, description: ${this.#description}, quantity: ${this.#quantity}, unityPrice: ${this.#unityPrice}, total: ${this.total}`)
    }
  }