// operadores matematicos | + - * /
let num1 = 5;
let num2 = 15;
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
num1++;
num2--;
console.log(soma,subtracao,multiplicacao,divisao, num1,num2);

// operadores atribuição | =
let casa = "propria";
console.log(casa);

// operadores sequência
let nome = "Fernando";
let sobrenome = " Borges";
let nome_completo = nome + sobrenome;
console.log(nome_completo);

// operadores comparação
let question1 = (5 == 5);
let question2 = (5 != 5);
let question3 = (5 > 5); // >=
let question4 = (5 < 5); // <=
let question5 = (5 === 5);
console.log(question1,question2,question3,question4,question5);

// operadores condicional (Ternário)
var idade, eleitor;
idade = 17;
eleitor = (idade < 18) ? "Não Eleitor" : "Eleitor"; // condicao ? true : false
console.log(`a resposta é ${eleitor}, a idade é ${idade}`);

// operadores lógicos
var resultado = (idade > 60 && idade < 70); // true or false
console.log(resultado);

