# Exercício de Casa 🏠 

Hoje trabalharemos em um projeto já existente.
Você é desenvolvedora em uma empresa que trabalha com sistemas de gerenciamentos de banco, e possui em mãos um projeto com a seguinte estrutura:

- [ ] Uma classe `Bank`, que possui como atributos:
  - [ ] `bankCode`, recebido na instanciação
  - [ ] `bankName`, recebido na instanciação
  - [ ] `#trasferTax`, privado e recebido na instanciação
  - [ ] `createdBanks`, estático, que armazena um objeto com os bancos existentes e sua quantidade de clientes.
  
  E como métodos:
  - [ ] `get transferTax()`

---

- [ ] Uma classe `Client`, que possui como atributos:
  - [ ] `name`, recebido na instanciação
  - [ ] `#cpf`, privado e recebido na instanciação
  - [ ] `banks`, inicializado com uma array vazia, responsável por armazenar os bancos dos quais o cliente é associado.
  
  E como métodos:
  - [ ] `get cpf()`
  - [ ] `hasAccountInThisBank(bank)`, que retorna true ou false se o cliente tiver ou não tiver conta no banco passado por parâmetro
  - [ ] `addBank(bank)`, adiciona o banco ao cliente
  - [ ] `removeBank(bank)`, remove o banco do cliente

---

- [ ] Uma classe `BankAccount`, que possui como atributos:
  - [ ] `client`, recebido na instanciação
  - [ ] `bank`, recebido na instanciação
  - [ ] `accountNumber`, recebido na instanciação
  - [ ] `agencyNumber`, recebido na instanciação
  - [ ] `#balance`, privado e inicializado na classe com 0 (zero).
  
  E como métodos:
  - [ ] `get balance()`
  - [ ] `set balance(newBalance)`
  - [ ] `creditAmount(amount)`, credita um valor no saldo
  - [ ] `debitAmount(amount)`, debita um valor do saldo
  - [ ] `transferTo(anotherAccount, amount)`, transfere um valor pra outra conta
  - [ ] `closeAccount()`, fecha a conta

___

Os bancos que são clientes da sua empresa, querem se atualizar, então eles querem fazer com que seus clientes retirem dinheiro em bancos 24 horas.
Além disso, agora o cliente poderá ter uma conta poupança e/ou uma conta corrente.

Com isso, temos as seguintes regras:
- Clientes com Conta Corrente
  - Podem fazer uma quantidade ilimitada de retiradas gratuitas em bancos 24 horas enquanto houver saldo.
  - Além disso, a taxa de transferência do banco **não** será aplicada em nenhuma transferência para qualquer outra conta de qualquer banco.

- Clientes com Conta Poupança
  - Podem fazer até 2 (duas) retiradas gratuitas em bancos 24 horas. Após isso, será aplicada uma taxa de retirada.
  - A taxa de transferência entre bancos diferentes continua sendo aplicada como já é.
  - Essa conta tem uma taxa de rendimento e um dia de rendimento, então, ao ser aplicada, o saldo total da conta terá seu valor atualizado (saldo já existente + rendimento).

Dessa maneira, as alterações que você precisará fazer são:

### BankAccount
Criar o método
- [ ] `cashWithdrawal(amount)`: realiza retiradas de dinheiro em bancos 24 horas.
  - Caso haja saldo suficiente, debitar o valor do saldo.
  - Caso não haja saldo suficiente para a operação, retornar uma mensagem para o usuário.
  - Imprima na console o resultado.

### CurrentAccount
Deve herdar a classe `BankAccount`.
- [ ] Sobrescrever o método `transferTo(anotherAccount, amount)`.
  - A transferência será feita sem nenhum tipo de taxa, independente do tipo de conta ou do banco.
  - Mantenha as verificações de conta bancária e saldo suficiente.

### SavingAccount
Deve herdar a classe `BankAccount`.
Deve possuir os seguintes atributos a mais:
- [ ] `incomeRate`, taxa de rendimento, recebido na instanciação
- [ ] `incomeDay`, dia de rendimento, recebido na instanciação

Por fim, a classe `SavingAccount` deve possuir o seguinte método:
- [ ] `generateIncome(currentDay)`, que recebe como o atributo o dia atual e, caso o dia atual seja igual ao dia de rendimento (`incomeDay`), deve atualizar o saldo, somando o valor rendido. Retorne o novo saldo na console.

Teste tudo o que foi criado.

---

**Presentinho da prô pra terça:**
**NÃO PRECISA FAZER ANTES!**
A classe `SavingAccount` possuir os seguintes atributos a mais:
- [ ] `qtdWithdrawal`: Quantidade de retiradas de dinheiro em bancos 24 horas
  - Deve ser inicializado com 0.
  - Deve ser um parâmetro privado.
  - Deve ter um método get.

- [ ] `MAX_OF_WITHDRAWAL`: Quantidade máxima de retiradas gratuitas
  - Deve ser inicializado com 2.

- [ ] `withdrawalTax`: Taxa a ser cobrada em cada retirada em bancos 24 horas
  - Cada conta tem direito a realizar 2 retiradas gratuitas. Após isso, essa taxa começa a ser cobrada em cada retirada.
  - Deve ser inicializada com algum valor (exemplo: 0.03).
  - Deve ser um parâmetro privado.
  - Deve ter um método get e um método set.

Além disso, a classe `SavingAccount` deve sobrescrever o método `cashWithdrawal(amount)` conforme as seguintes regras:
- Antes de tudo, informe ao cliente quantas retiradas ele já fez até o momento, e quantas são gratuitas.
- Caso o cliente ainda tenha retiradas gratuitas:
  - Faça a retirada sem aplicar a taxa (caso ele possua saldo suficiente).
  - Atualize a quantidade de retiradas já feitas.
  - Informe ao cliente seu novo saldo e a quantidade de retiradas feitas até o momento.
- Caso a quantidade de retiradas tenha ultrapassado o limite:
  - Faça a retirada aplicando a taxa (caso ele possua saldo suficiente).
  - Informe ao cliente que a taxa está sendo aplicada
  - Atualize a quantidade de retiradas já feitas.
  - Informe ao cliente seu novo saldo e a quantidade de retiradas feitas até o momento.
- Caso não possua saldo suficiente, não realize a retirada e informe ao cliente.

___


DESAFIO:
> Essa etapa **não** é obrigatória!!!

 Sua chefe busca uma pessoa que consiga desenvolver uma nova atualização para o sistema, e dará uma promoção para as pessoas desenvolvedoras que toparem!

A atualização é a seguinte:
- A partir de agora, teremos pessoas gerentes.
- Cada banco terá um ou mais gerentes.
- Cada cliente, quando se associar a um banco, terá um gerente daquele banco, escolhido de maneira aleatória.
- Os gerentes sabem quem são seus clientes. 

Vamos entender como serão as nossas atualizações de código:
### Person
Crie uma Classe `Person` que terá os seguintes atributos:
- [ ] `name`, recebido por instanciação
- [ ] `#cpf`, privado, recebido por instanciação e com um método get

### Manager
Crie uma classe `Manager` herdando de `Person`:
- Atributos:
  - [ ] `#salary`, privado, recebido por instanciação, com métodos get e set
  - `clients`, deve ser inicializado com uma array vazia

- Métodos:
  - [ ] `addClient(client)`, adiciona um novo cliente na array `clients`

### Bank
A classe `Bank` deve ser alterada da seguinte maneira:
- Criar um atributo `managers`, responsável por guardar os gerentes daquele banco. Inicializada com uma array vazia.
- Criar um método `contractManager(manager)`, responsável por adicionar um novo gerente na array `managers`. Deve ser feita uma validação para confirmar se o parâmetro recebido é um gerente válido.

### Client
A classe `Client` deve ser alterada da seguinte maneira:
- Deve ser herdada de `Person`. Com isso, as declarações e métodos que vêm da classe mãe não estarão mais na classe `Client`.

- Métodos novos:
  - `#getAnyManager(bank)`, privado, a ser usado apenas dentro da própria classe.
    - Busca e retorna, de maneira aleatória, um gerente do array de gerentes do banco.
    - Chama a função `addClient()` daquele gerente escolhido, passando o nome do cliente.

- Métodos alterados:
  - `addBank(bank)`:
    - Chama o método `#getAnyManager(bank)`, para buscar um gerente para aquele cliente.
    - Adiciona na array `banks`, além do banco, o gerente escolhido. Agora, `banks` é uma array de objetos.
    - Imprime na console, além da confirmação de adição do banco, o nome da gerente escolhida.
  - `removeBank(bank)`: `element.bankCode` agora será `element.bank.bankCode`, pois agora banks é uma array de objetos
  - `hasAccountInThisBank(bank)`: `element.bankCode` agora será `element.bank.bankCode`, pois agora banks é uma array de objetos

### BankAccount
A classe `BankAccount` deve ser alterada da seguinte maneira:
- No constructor, no momento em que se valida se o cliente tem conta naquele banco, `element.bankCode` agora será `element.bank.bankCode`, pois agora banks é uma array de objetos.