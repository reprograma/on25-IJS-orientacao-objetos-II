class Employee {
    name;
    cpf;
    salary;
    raiseSalary = 0.5
    constructor(name, cpf, salary) {
        this.name = name
        this.cpf = cpf
        this.salary = salary
    }

    calculateSalary() {
        this.salary += this.salary * this.raiseSalary
        console.log(`Seu aumento foi R$ ${this.salary}`)
    }
    printData() {
        console.log(`Nome do colaborador: ${this.name}`)
        console.log(`Cpf do colaborador: ${this.cpf}`)
        console.log(`Salário atual do colaborador: R$${this.salary}`)
    }
}

// const employee1 = new Employee('Mari', '11122233344', 50000)
// employee1.calculateSalary()
// employee1.printData()



class Manager extends Employee {
    managerLevel
    raiseSalary = 0.15

    constructor(name, cpf, salary, managerLevel) {
        super(name, cpf, salary)
        this.managerLevel = managerLevel
    }
    calculateSalary() {
        super.calculateSalary()

    }

    printData() {
        super.printData()
        console.log(`Nível de gerência ${this.managerLevel}`)
    }

}



class Assistant extends Employee {
    enroll
    constructor(name, cpf, salary, enroll) {
        super(name, cpf, salary)
        this.enroll = enroll
    }

    printData() {
        super.printData()
        console.log(`Sua matricula ${this.enroll}`)
    }
}

class TechAssistant extends Assistant {
    salaryBonus
    constructor(name, cpf, salary, enroll, salaryBonus) {
        super(name, cpf, salary, enroll)
        this.salaryBonus = salaryBonus
    }

    printData() {
        super.printData()
        console.log(`Seu bonus salarial é de R$${this.salaryBonus}`)
    }
}

class AdmAssistant extends Assistant {
    workShift
    additionalNight
    constructor(name, cpf, salary, enroll, workShift) {
        super(name, cpf, salary, enroll)
        this.workShift = workShift
        this.additionalNight = 100

    }

    addNight() {
        if (this.workShift === 'noite') {
            console.log(`Seu adicional nortuno é R$${this.additionalNight}`)
        }else if (this.workShift === 'dia'){
            console.log(`Você não possui adicional nortuno.`)
        }else{
            return
        }
    }
    printData() {
        super.printData()
        this.addNight()
        console.log(`Seu turno é ${this.workShift}`)
    }
}

const admAssistant = new AdmAssistant('Camila', '10055566628', 1000, 5555,'noite')
admAssistant.addNight()
admAssistant.printData()

// const techAssistant = new TechAssistant('Pamela', '10055566624', 1000, 5555, 100)
// techAssistant.printData()
// const assistant1 = new Assistant('Claudia', '10030050044',  200, 3538  )
// assistant1.printData()
// assistant1.calculateSalary()
// const manager1 = new Manager('Joana', '22255566644',150000, 'Senior')
// manager1.calculateSalary()
// manager1.printData()