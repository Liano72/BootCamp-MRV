function substituindoNumeros (array) {
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Voce já é zero!!!")
        }
        else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;

}

let arr = [0, 2, 5, 7, 8, 9];
console.log(substituindoNumeros(arr));