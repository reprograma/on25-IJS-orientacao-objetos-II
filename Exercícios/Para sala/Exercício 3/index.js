class Mother {
    nationality;
    eyesColor;
    hairColor;
    constructor(nationality, eyesColor, hairColor) {
        this.nationality = nationality;
        this.eyesColor = eyesColor;
        this.hairColor = hairColor;
    }

     printMotherProps() {
       console.log(`Suas caracteristicas ${this.nationality} ${this.eyesColor} ${this.hairColor}`) 
    }
}


class Daughter extends Mother {}

const mother = new Mother('Argentina', 'castanhos','castanho');
mother.printMotherProps();
console.log(mother)

const elderDaughter = new Daughter('Brasileira', 'castanhos','castanho');
elderDaughter.printMotherProps()

console.log(elderDaughter)