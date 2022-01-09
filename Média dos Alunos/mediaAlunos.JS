const alunos = [
    {
        nome: 'João',
        nota: 7,
        turma: '1A'
    },
    {
        nome: 'Lorena',
        nota: 8,
        turma: '2B'
    },
    {
        nome: 'Augusto',
        nota: 5,
        turma: '2D'
    },
];

function alunosNotas (array, media) {

    let aprovados = [];

    for(i = 0; i < array.length; i++){

        const {nota, nome} = array[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosNotas(alunos, 5));