class Teclado {
    constructor(id) {
        this.id = id
    }
}

class Mouse {
    constructor(id) {
        this.id = id
    }
}

class Monitor {
    constructor(id) {
        this.id = id
    }
}

class Memoria {
    constructor(id) {
        this.id = id
    }
}

class PlacaMae {
    constructor(id){
        this.id = id
    }
}

class Computador {
    constructor(id, teclado, mouse, monitor, memoria, placaMae) {
        this.id = id
        this.teclado = teclado
        this.mouse = mouse
        this.monitor = monitor
        this.memoria = memoria
        this.placaMae = placaMae
    }
}

teclado1 = new Teclado(1)
mouse1 = new Mouse(2)
monitor1 = new Monitor(3)
memoria1 = new Memoria(4)
placaMae1 = new PlacaMae(5)

computador1 = new Computador(1, teclado1, mouse1, monitor1, memoria1, placaMae1)
console.log(computador1)
