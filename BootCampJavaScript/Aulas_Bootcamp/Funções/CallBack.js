const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(a, b){
    return a + b;
}

const sub = function(a, b){
    return a - b;
}
let a=1; let b=3;

let resultado = calc(soma, a, b);
console.log(resultado);

resultado = calc(sub, a, b);
console.log(resultado);