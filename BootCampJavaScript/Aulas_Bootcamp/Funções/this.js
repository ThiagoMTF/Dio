const alunos = [
    {
        nome: 'Thiago',
        nota: '8.5',
        turma: 'A',
    },
    {
        nome: 'Joao',
        nota: '5',
        turma: 'B',
    },
    {
        nome: 'Pedro',
        nota: '10',
        turma: 'A',
    },
    {
        nome: 'Pedra',
        nota: '2.5',
        turma: 'B',
    },
    {
        nome: 'Maria',
        nota: '6',
        turma: 'A',
    }
]
const media = 6;
function alunoAprovados(arr, media) {
    let aprovados = [];
    let reprovados = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i].nota >= media){
            aprovados.push(arr[i].nome);
        } else {
            reprovados.push(arr[i].nome);
        }
    }
    return aprovados;
}


console.log(`Aprovados: ` + alunoAprovados(alunos, media));
// console.log(`Aprovados: ` + alunoAprovados(alunos, media));
