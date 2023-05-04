//spread
function soma(w, x, y, z){
    return w + x + y + z;
}

let array = [2, 3, 5, 6];
// ... -> 'SPREAD' separa um array em argumentos
//console.log(soma(...array));

// ... -> também funciona no inverso ARRAY -> ARGUMENTOS
function confereTamanho(...args){
    //calcula o tamaho do array(após conversão)
    console.log(args.length);
}
//array = confereTamanho(1, 2, 3, 4, 6);


//Objetos
const user = {
    id: 25,
    nome: 'Thiago',
    nomeCompleto: {
        primeiroNome: nome,
        segundoNome: 'Muniz' 
    }
};

function userId();

