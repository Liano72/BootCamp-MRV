function verificacao (array, num) {

  try {
      if(!array && !num){ 
          throw new ReferenceError('Envie os parametros!');
      }
      if(typeof array !== 'object'){
          throw new TypeError('Array precisa ser do tipo object');
      }
      if(typeof num !== 'number'){
          throw new TypeError('Num precisa ser do tipo Number');
      }
      if(array.length !== num){
          throw new RangeError("Tamanho Inválido");
      }

      return array;
} catch (e){
      if(e instanceof ReferenceError){
        console.log('Este erro é um ReferenceError');
        console.log(e.message);
      }
      else if(e instanceof TypeError){
        console.log('Este erro é um TypeError');
        console.log(e.message);
      }
      else if(e instanceof ReferenceError){
        console.log('Este erro é um RangeError');
        console.log(e.message);
      }
      else{
        console.log('Erro não esperado'+ e);
      }
}
}
