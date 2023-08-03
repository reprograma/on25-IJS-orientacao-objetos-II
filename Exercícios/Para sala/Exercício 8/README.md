# Exercício de Sala 🏫  

- Conteúdo teórico: 
[Herança](../../../6.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20II/6.1%20-%20Heran%C3%A7a.md) e [Polimorfismo](../../../6.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20II/6.2%20-%20Polimorfismo.md)

## Exercício 8

Vamos retomar o [Exercício 5](../Exerc%C3%ADcio%205/), onde tínhamos o seguinte código:

```javascript
class Ingresso {
	lote;
	preco_promocional = 10;
	preco_primeiro_lote = 20;
	preco_segundo_lote = 30;
	preco_terceiro_lote = 40;

	constructor(lote) {
		this.lote = lote;
	}

	mostrarPreco() {
		if (this.lote === 'promocional') {
			console.log(`Preço do ingresso: R$ ${this.preco_promocional}`);
		} else if (this.lote === 'primeiro') {
			console.log(`Preço do ingresso: R$ ${this.preco_primeiro_lote}`);
		} else if (this.lote === 'segundo') {
			console.log(`Preço do ingresso: R$ ${this.preco_segundo_lote}`);
		} else if (this.lote === 'terceiro') {
			console.log(`Preço do ingresso: R$ ${this.preco_terceiro_lote}`);
		} else {
			console.log('Lote não encontrado.');
		}
	}
}

class IngressoNormal extends Ingresso {}

class IngressoVIP extends Ingresso {
	preco_promocional = 50;
	preco_primeiro_lote = 60;
	preco_segundo_lote = 70;
	preco_terceiro_lote = 80;
}
```

Agora, sobrescreva o método `mostrarPreco` de cada uma das classes filhas para que, antes de mostrar o preço do ingresso, imprima na console o texto "INGRESSO NORMAL" ou "INGRESSO VIP", de acordo com o tipo de ingresso.
Além disse, na classe mãe, altere o método `mostrarPreco` para que ele exiba o lote do ingresso, além do preço.

Teste tudo o que foi criado.