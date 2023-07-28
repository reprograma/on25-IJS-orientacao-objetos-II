# Exercício de Sala 🏫  

- Conteúdo teórico: 
[Polimorfismo](../../../6.%20Introdu%C3%A7%C3%A3o%20%C3%A0%20Orienta%C3%A7%C3%A3o%20a%20Objeto%20II/6.2%20-%20Polimorfismo.md)

## Exercício 8

Vamos retomar o [Exercício 5](../Exerc%C3%ADcio%205/), onde tínhamos o seguinte código:

```javascript
class Ingresso {
	preco;
	lote;

	LOTE_PROMOCIONAL = 5;
	PRIMEIRO_LOTE = 10;
	SEGUNDO_LOTE = 15;
	TERCEIRO_LOTE = 20;

	constructor(lote) {
		this.lote = lote;
	}

	mostrarPreco() {
		if (this.lote === 'promocional') {
			this.preco = this.LOTE_PROMOCIONAL;
		} else if (this.lote === 'primeiro') {
			this.preco = THIS.PRIMEIRO_LOTE;
		} else if (this.lote === 'segundo') {
			this.preco = THIS.SEGUNDO_LOTE;
		} else if (this.lote === 'terceiro') {
			this.preco = THIS.TERCEIRO_LOTE;
		} else {
			this.preco = undefined;
			console.log('Lote não encontrado');
			return;
		}

		console.log(`R$ ${this.preco},00`);
	}
}

class IngressoNormal extends Ingresso {}

class IngressoVIP extends Ingresso {
	LOTE_PROMOCIONAL = 50;
	PRIMEIRO_LOTE = 60;
	SEGUNDO_LOTE = 70;
	TERCEIRO_LOTE = 80;
}
```

Agora, sobrescreva o método `mostrarPreco` de cada uma das classes filhas para que, antes de mostrar o preço do ingresso, imprima na console o texto "INGRESSO NORMAL" ou "INGRESSO VIP", de acordo com o tipo de ingresso.
Além disse, na classe mãe, altere o método `mostrarPreco` para que ele exiba o lote do ingresso, além do preço.

Teste tudo o que foi criado.