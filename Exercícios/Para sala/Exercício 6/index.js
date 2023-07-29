class Animal{
    name;
    age;
    constructor(name, age){
        this.name = name;
        this.age = age
    }
}

const animal1 = new Animal('Pulga', 2)
console.log(animal1)

class Dog extends Animal{
    furColor;
    size
    constructor(name, age, furColor, size){
        super(name, age)
            this.furColor= furColor;
            this.size = size
        }
    
}

const dogShiba = new Dog('Filó', 4, 'caramel', 'pequeno')

console.log(dogShiba)