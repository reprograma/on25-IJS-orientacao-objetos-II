# Exercício de Sala 🏫  

- Conteúdo teórico: 
[Abstração](../../../README.md#abstração) e [Encapsulamento](../../../README.md#encapsulamento)

## Exercício 2

Dada a classe `Account` abaixo:
```javascript
class Account {
  id;
  name;
  balance;

  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  credit(amount) {
    this.balance += amount;
    console.log(`O saldo após o crédito é de R$ ${this.balance}`);
  }

  debit(amount) {
    this.balance -= amount;
    console.log(`O saldo após o débito é de R$ ${this.balance}`);
  }

  transferTo(anotherAccount, amount) {
    if (!(anotherAccount instanceof Account)) {
      throw 'ERRO: Informe uma conta válida.';
    }

    if (this.balance <= amount) {
      throw 'ERRO: Você não possui saldo suficiente para realizar essa operação.';
    }
    this.debit(amount);
    anotherAccount.credit(amount);

    console.log(`O saldo atual da conta de origem é de R$ ${this.balance}`);
    console.log(
      `O saldo atual da conta de destino é de R$ ${anotherAccount.balance}`
    );
  }
}
```

Modifique a classe `Account` acima conforme o diagrama de classe abaixo:

<div style="text-align:center;">
  <img src="https://github.com/reprograma/on25-IJS-orientacao-objetos-I/assets/26902816/72ffbe7a-8af6-42d5-90f7-f62284808858" />
</div>

Teste tudo o que foi criado.

---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Resolvi o exercício dentro da pasta resolução.
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
