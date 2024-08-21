class Carro{
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    buzina(){
        return this.modelo + " buzinou: Biiiiiiii";
    }
}

const uno = new Carro("Fiat","Uno",2001);
const gol = new Carro("Volkswagen","Gol",2013);
console.log(uno);
console.log(gol.buzina());