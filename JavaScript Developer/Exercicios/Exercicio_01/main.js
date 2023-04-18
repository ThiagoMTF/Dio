/*
1) Faça um programa que receba a média de um aluno.
Caso a média seja < 5 imprima "Reprovado"
Caso a média seja >= 5 e < 7 imprima "Recuperação"
Caso a média seja >= 7 imprima "Aprovado"
*/
const funcoes = require('./funcoes_auxiliares');
let valores = funcoes.gets();


/*switch(valores){
    case(valores >= 6):
        funcoes.print("Aprovado!");
    case(valores < 6):
        funcoes.print("Reprovado!");
}*/
if(valores >= 6)
    funcoes.print(valores+"\nAprovado!");
else 
    funcoes.print(valores+"\nReprovado!");


