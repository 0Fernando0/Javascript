function soma(valor1,valor2){
    return valor1 + valor2;
}

function realParaDollar(real, cotacaoDollar){
    return real * cotacaoDollar;
}

async function cotacaoAtual(){
    const URL = "https://economia.awesomeapi.com.br/last/USD-BRL";
    try{
        const response = await fetch(URL);

        if(!response.ok){
            throw new Error("Erro Network: " + response.statusText);
        }

        const data = await response.json();

        console.log(data);
    }
    catch(erro){
        console.log(erro);
    }
}

function alertaHello(){
    alert("Hello, World!");
}

document.getElementById("saida").innerHTML = soma(5,5);
alertaHello();
// alert(realParaDollar(5,5.55));