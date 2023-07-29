class Employee {
  name;
  cpf;
  salary;
  increase = 0.1;
  constructor(name, cpf, salary) {
    this.name = name;
    this.cpf = cpf;
    this.salary = salary;
  }
  receiveIncrease() {
    this.salary += this.salary * this.increase;
    console.log(`Novo salário de: R$ ${this.salary},00`);
  }
  showData() {
    console.log(`Nome: ${this.name}`);
    console.log(`CPF: ${this.cpf}`);
    console.log(`Salário: R$ ${this.salary},00`);
  }
}

let employee1 = new Employee("Marina", 312548769, 1000);
//employee1.receiveIncrease();
//employee1.showData();

class Manager extends Employee {
  managementLevel;
  increase = 0.15;
  constructor(name, cpf, salary, managementLevel) {
    super(name, cpf, salary);
    this.managementLevel = managementLevel;
  }
  showData() {
    super.showData();
    console.log(`Nível de gerência: ${this.managementLevel}`);
  }
}

let manager1 = new Manager("Lua", 578978956, 1000, "Senior");
//manager1.receiveIncrease();
//manager1.showData();

class Assistant extends Employee {
  registration;
  constructor(name, cpf, salary, registration) {
    super(name, cpf, salary);
    this.registration = registration;
  }
  showData() {
    super.showData();
    console.log(`Registro: ${this.registration}`);
  }
}
let assistant1 = new Assistant("Maria", 879875465, 1000, 5454);
//assistant1.receiveIncrease();
//assistant1.showData();

class TecAssistant extends Assistant {
  bonusSalary;
  constructor(name, cpf, salary, registration, bonusSalary) {
    super(name, cpf, salary, registration);
    this.bonusSalary = bonusSalary;
  }
  showData() {
    super.showData();
    console.log(`Bônus salarial: R$ ${this.bonusSalary},00`);
  }
}
let tecAssistant1 = new TecAssistant("João", 879875465, 1000, 8080, 1000);
//tecAssistant1.receiveIncrease();
//tecAssistant1.showData();

class AdmAssistant extends Assistant {
  shift;
  addNight;
  constructor(name, cpf, salary, registration, shift, addNight) {
    super(name, cpf, salary, registration);
    this.shift = shift;
    this.addNight = addNight;
  }
  showData() {
    super.showData();
    console.log(`Turno: ${this.shift}`);
    if (this.shift === "Night") {
      console.log(`Adicional noturno: R$ ${this.addNight},00`);
    }
  }
}
let admAssistant1 = new AdmAssistant(
  "Caio",
  879875465,
  1000,
  5784,
  "Night",
  500
);
admAssistant1.receiveIncrease();
admAssistant1.showData();
