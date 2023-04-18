const entradas = [5.5, 7.5, 10];
let i = 0;

function gets(){
    let valor;
    for(i=0; i<entradas.length; i++){
        valor = entradas[i];
        return valor;
    }
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };
