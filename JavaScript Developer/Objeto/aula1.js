class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    descrever(){
        console.log("Retorno do Método\n"+this.nome+"\n"+this.idade);
    }
}

function comparaPessoa(p1, p2){
    if(p1.idade > p2.idade){
        console.log(p1.nome+" é mais velho(a) que "+p2.nome);
    } else if(p1.idade > p2.idade){
        console.log(p2.nome+" é mais velho(a) que "+p1.nome);
    } else {
        console.log(p1.nome+" e "+p1.nome+" tem a mesma idade")
    }
}

const thiago = new Pessoa("thiago", 25);
const deborah = new Pessoa("deborah", 24);

comparaPessoa(thiago, deborah);

