const lista = [
    "arroz",
    "feijão",
    "leite",
    "queijo"
];

const tamanhoLista = lista.length;
const ultimo_item = lista[lista.length - 1];
const e_array = Array.isArray(lista);


console.log("o comprimento da lista é "+ tamanhoLista);
console.log("o ultimo item da lista é "+ ultimo_item);
console.log(e_array);