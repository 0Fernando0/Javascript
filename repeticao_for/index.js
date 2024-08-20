/*
function repeat(vezes){
    let numeros = [] // vetor de inteiros
    for (let num = 1; num <= vezes; num++){
        numeros.push(num)
    };
    return numeros
};
document.getElementById("teste").innerHTML = repeat(10).join(" ");

var anos = document.getElementById("ano");
for (let i = AnoAtual; i >= 1900; i--){
    let ano = document.createElement("option");
    ano.setAttribute("value",i);
    ano.textContent = i;
    anos.appendChild(ano);
};
*/

const carros = ["Chevrolet", "Pegeot", "Honda", "Lanborguine"];

let marca = document.getElementById("marcas");

carros.forEach(carro => {
    let element = document.createElement("option");
    element.setAttribute("value",carro);
    element.textContent = carro;
    marca.append(element);
});