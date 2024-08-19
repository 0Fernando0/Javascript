const nomes = ["Fernando","Borges","Pereira"];
const idade = [24,34,44];

const adiciona_item_fim = nomes.push("Cavalcante");
const adiciona_item_comeco = nomes.unshift("Primeiro");
const adiciona_item_posicao = nomes.splice(1,0,"Adicionada Agora"); 
const remove_ultimo_item = nomes.pop();
const remove_primeiro_item = nomes.shift();
const juntar_lista = nomes.concat(idade);

const valores = [13,3,5,2,4,6];
const pares = valores.slice(3);
const impares = valores.slice(0,3);


const ordem_numerica = valores.sort(function(a,b){ return a-b});

function MaiorNumero(array){return Math.max.apply(null, array);}
function MenorNumero(array){return Math.min.apply(null, array);}

const filtragem = ordem_numerica.filter(function(value,index,array){
    return value > 5;
});

document.getElementById("paragrafo").innerHTML = filtragem;
