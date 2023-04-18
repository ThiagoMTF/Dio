class Carro {
    marca;
    cor;
    kmporlitro;
    
    constructor(marca, cor, gasto){
        this.marca = marca;
        this.cor = cor;
        this.kmporlitro = gasto;
    }

    calculoConsumo(km, precoCombustivel){
        let valorGasto;

        valorGasto = (km / this.kmporlitro) * precoCombustivel;

        console.log("Para "+km+"km e o valor do combustivel R$"+precoCombustivel);
        console.log("\nO carro "+this.marca+" gasta R$"+valorGasto);
    }
}

const courrier = new Carro("Courrier", "Branco", 15);

courrier.calculoConsumo(45, 4.5);
