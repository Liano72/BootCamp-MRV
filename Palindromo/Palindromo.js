function Palindromo(string) {
	if (!string) return "String Inválida";
	console.log(string === string.split('').reverse().join(''));
}
Palindromo('jao');