function substituindoNumeros (array) {
    
    //Verifica se existe um array.
    if(!array) return "Isso não é um array";
    
    //Verifica se ele está vazio.
    if(!array.length) return "Array vazio!";
    
    //Verifica se os elementos do array são par ou impar
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Voce já é zero!!!")
        }
        
    //Caso sejam par é feita a substituição por zero.
        else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;

}

let arr = [0, 2, 5, 7, 8, 9];
console.log(substituindoNumeros([]));
