let = contador = 0;

const currentNumber = document.getElementById("currentNumber");

function increment(){
    contador++;
    currentNumber.innerHTML = contador;
}

function decrement(){
    contador--;
    currentNumber.innerHTML = contador;
}