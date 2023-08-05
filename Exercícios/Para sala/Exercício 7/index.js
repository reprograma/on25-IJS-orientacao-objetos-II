class Teclado {
  id = 1;
}

class Mouse {
  id = 2;
}

class Monitor {
  id = 3;
}

class Memoria {
  id = 4;
}

class PlacaMae {
  id = 5;
}

class Computador {
  id = 6;
  teclado = new Teclado();
  mouse = new Mouse();
  monitor = new Monitor();
  memoria = new Memoria();
  placaMae = new PlacaMae();
}

const computador = new Computador();
console.log(computador);
