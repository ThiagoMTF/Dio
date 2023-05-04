//

//Função criada sem um número definido de argumentos
function findMax() {
    let max = -Infinity;

    //arguments -> seleciona os argumentos
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max)
            max = arguments[i];
    }

    return max;
}

function showArguments(){
    return arguments;
}


let maximo = findMax(1,12,145,234,43,-23,-122, 3, 40, 48);
//console.log(maximo);

let argumentos = showArguments(1, 3, [40, 10, 25], 'Thiago Muniz');
console.log(argumentos);

