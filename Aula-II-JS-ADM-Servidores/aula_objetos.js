// Exemplos de como desenvolver objetos em JavaScript

const pessoa = {

    nome: "Ana",

    falar: function () {
        retur `Meu nome é ${this.nome}`;
    },
    andar: function () {
        return `Estou andando`;
    },
    cantar: function (){
        return `${this.nome} está cantando`;
    }

};

    console.log(pessoa.falar());
    console.log(pessoa.andar());
    console.log(pessoa.cantar());