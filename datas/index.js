/* MANIPULANDO DATAS EM JAVASCRIPT */

// comando para pegar a data
let data = new Date();

// comando para pegar a ano com 4 digitos
let ano = data.getFullYear();

// comando para pegar mes atual de 0 até 11 (jan - dez)
let mes = data.getMonth()
const meses = [
    "Janeiro","Fevereiro","Março",
    "Abril","Maio","Junho",
    "Julho","Agosto","Setembro",
    "Outubro","Novembro","Dezembro"
]

// pegar dia do mês - 1 até 31
let dia = data.getDate();

// pegar dia da semana
let dia_semana = data.getDay();

const diasDaSemana = [
    "Domingo",
    "Segunda","Terça",
    "Quarta","Quinta",
    "Sexta","Sabado"
]

let dia_semana_escrito = diasDaSemana[dia_semana];

// pegar a hora atual, minutos, segundos
let hora = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getSeconds()

// pegar a data no formato do brasil
let dataBr = data.toLocaleString("pt-BR",{ timeStyle: "short"});

// comparar datas
var hoje = new Date();
var vencimento = new Date(2024,7,22);

if(hoje > vencimento){
    console.log("a conta venceu!");
}
else{
    console.log("ainda não venceu");
}

// deferenças entre datas em dias

var dataInicial = new Date();
var dataFinal = new Date(2024,5,19);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias);