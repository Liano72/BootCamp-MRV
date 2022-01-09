const Pessoa1 = {
    nome: 'Maria',
    idade: 50
};
const Pessoa2 = {
    nome: 'Ricardo',
    idade: 26
};

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(Pessoa1, 20));
