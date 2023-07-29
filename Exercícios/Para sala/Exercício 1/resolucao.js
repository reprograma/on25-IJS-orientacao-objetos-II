class InvoiceItem {
    #id;
    #desc;
    #qty;
    #unitPrice;

    constructor(id, desc, qty, unitPrice) {
        this.#id = id;
        this.#desc = desc;
        this.#qty = qty;
        this.#unitPrice = unitPrice;
    }

    get id() {
        return this.#id;
    }

    get desc() {
        return this.#desc;
    }

    get qty() {
        return this.#qty;
    }

    set qty(qty) {
        this.#qty = qty;
    }

    get unitPrice() {
        return this.#unitPrice;
    }

    set unitPrice(unitPrice) {
        this.#unitPrice = unitPrice;
    }

    get Total() {
        return this.#unitPrice * this.#qty;
    }

    toString() {
        console.log(`id: ${this.#id}, description: ${this.#desc}, qtd: ${this.#qty}, unitPice: ${this.#unitPrice}, Total: ${this.Total}`);
    }

}

const bala = new InvoiceItem(1234, "um doce", 5, 2.0);

bala.toString();