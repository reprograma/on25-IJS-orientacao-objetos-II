class Funcionario {
    nome;
cpf;
salario;
aumento = 0.1;

constructor (nome, cpf, salario){
    this.nome = nome;
    this.cpf = cpf;
    this.salario = salario;
}
receberAumento(){
    this.salario += this.salario * this.aumento;
    console.log(`novo salário ${this.salario}`)
}


dados() {
    console.log(`${this.nome}`)
    console.log(`${this.cpf}`)
    console.log(`${this.salario}`)
  }

}
const func1 = new Funcionario ("elvira", 123,1000)
func1.receberAumento();
func1.dados();

class Gerente extends Funcionario{
    nivelGerencia;
    aumento = 0.15;

    constructor(nome, cpf, salario, nivelGerencia){
    super(nome, cpf, salario);
    this.nivelGerencia = nivelGerencia;
    }

dados(){
    super.dados();
    console.log(this.nivelGerencia)
}}

const gerente1 = new Gerente ("Debora", 321, 1000, "Jr")
gerente1.receberAumento();
gerente1.dados();

class Assistente extends Funcionario{
    matricula;
    constructor (nome, cpf, salario, matricula){
    super(nome, cpf, salario);
    this.matricula = matricula
}
dados(){
    super.dados();
    console.log(this.matricula)
}}
const assistente1 = new Assistente ("Gi", 321, 1000, "Teste")
assistente1.dados();

class AssistenteTécnico extends Assistente{
    abonoSalarial;
    constructor (nome, cpf, salario, matricula, abonoSalarial){
    super(nome, cpf, salario, matricula);
    this.abonoSalarial=abonoSalarial
}
dados(){
    super.dados();
    console.log(this.abonoSalarial)
}}
const assistenteTecnico = new AssistenteTécnico ("Kissa", 321, 1000, "Teste", "escravo")
assistenteTecnico.dados();
assistenteTecnico.receberAumento();

class AssistenteAdm extends Assistente{
    turno;
    addNuturno;
    constructor (nome, cpf, salario, matricula, turno, addNuturno){
    super(nome, cpf, salario, matricula);
    this.turno = turno
    this.addNuturno = addNuturno
}

    dados() {
        super.dados();
        if (this.turno==="noite") {
        console.log(`adicional noturno: ${this.addNuturno}`);
        }}

}
const AssistenteAdm = new AssistenteAdm ("Kissa", 321, 1000, "Teste", "noite", 100)
AssistenteAdm.dados();
