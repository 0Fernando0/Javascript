const carro = {
    marca:"Ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC1234",
    buzina: function(){ alert("biiiiiii") },
    completo: function(){
        return "a marca é " + this.marca + " e o modelo é " + this.modelo
    }
};


console.log(carro);
console.log(carro.completo())