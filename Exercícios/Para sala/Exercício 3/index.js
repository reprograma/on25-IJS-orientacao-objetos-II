class Mother {
  nacionality;
  colorEyes;
  colorHair;
  constructor(nacionality, colorEyes, colorHair) {
    this.nacionality = nacionality;
    this.colorEyes = colorEyes;
    this.colorHair = colorHair;
  }
  showCharacteristics() {
    console.log(
      `Nacionalidade: ${this.nacionality}, Cor dos olhos: ${this.colorEyes}, Cor do cabelo: ${this.colorHair}`
    );
  }
}

class Daughter extends Mother {}

let mother1 = new Mother("Brasileira", "Azul", "Loira");
mother1.showCharacteristics();
let daughter1 = new Daughter("Brasileira", "Castanho", "Loira");
daughter1.showCharacteristics();
