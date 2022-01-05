function Soma() {

    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    resultado = n1 + n2;
        
    if (n1 == n2) {

        if(resultado >10){

            if (resultado >20){

            alert(`Os números ${n1} e ${n2} são iguais. A soma deles é ${resultado}, maior que 10 e maior que 20.`);
            
            }
            else (resultado <20) 

                alert(`Os números ${n1} e ${n2} são iguais. A soma deles é ${resultado}, maior que 10 e menor que 20.`);
            
        }
        else(resultado <10)

             if (resultado >20){

            alert(`Os números ${n1} e ${n2} são iguais. A soma deles é ${resultado}, menor que 10 e maior que 20.`);
            
            }
            else (resultado <20) 

                alert(`Os números ${n1} e ${n2} são iguais. A soma deles é ${resultado}, menor que 10 e menor que 20.`);
          
    }
    else (n1 != n2)

        if(resultado >10){

            if (resultado >20){

            alert(`Os números ${n1} e ${n2} são diferentes. A soma deles é ${resultado}, maior que 10 e maior que 20.`);
            
            }
            else (resultado <20) 

                alert(`Os números ${n1} e ${n2} são diferentes. A soma deles é ${resultado}, maior que 10 e menor que 20.`);
            
        }
        else(resultado <10)

            if (resultado >20){

            alert(`Os números ${n1} e ${n2} são diferentes. A soma deles é ${resultado}, menor que 10 e maior que 20.`);
            
            }
            else (resultado <20) 

                alert(`Os números ${n1} e ${n2} são diferentes. A soma deles é ${resultado}, maior que 10 e menor que 20.`);
        

}


Soma();