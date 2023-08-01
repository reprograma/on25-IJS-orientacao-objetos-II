class Animal {
    nome;
    Idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

//const animal1 = new Animal('Amora', 2);
//console.log(animal1);


class Cachorro extends Animal {
   corDoPelo;
   porte;

   construtor( corDoPelo, porte, nome, idade ) {
    super(nome, idade)
   this.corDoPelo = corDoPelo;
   this.porte = porte;
}  
}
const cachorro1 = new Cachorro('preto', 'pequeno', 'Amora', 2);
console.log(cachorro1);