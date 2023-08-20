class InvoiceItem {
<<<<<<< HEAD
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
    return this.#unityPrice;
  }

  set unityPrice(newUnityPrice) {
    this.#unityPrice = newUnityPrice;
  }

  get total() {
    return this.#unityPrice * this.#quantity;
  }

  toString() {
    console.log(`id: ${this.#id}, description: ${this.#description}, quantity ${this.#quantity}, unity price ${this.#unityPrice} e o total será ${this.total}`);
  }
}

/*console.log(InvoiceItem.quantity)

const id = 1;
const description = 'Produto A';
const quantity = 5;
const unityPrice = 10.50;

const invoiceItem = new InvoiceItem(id, description, quantity, unityPrice);

console.log(toString)*/
=======
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
		return this.#unityPrice;
	}

	set unityPrice(newUnityPrice) {
		this.#unityPrice = newUnityPrice;
	}

	get total() {
		return this.#unityPrice * this.#quantity;
	}

	toString() {
		console.log(
			`id: ${this.#id}, description: ${this.#description}, quantity: ${
				this.#quantity
			}, unityPrice: ${this.#unityPrice}, total: ${this.total}`
		);
	}
}
>>>>>>> a846e22c0633d363495d431f20260788415d5397
