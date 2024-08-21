/* 
JSON.parse() -> converter texto no padrão JSON em objetos
JSON.stringify() -> Converte objetos em texto padrão JSON
*/

document.getElementById("dolar").onchange = buscarCotacao   
document.getElementById("dolar").onkeyup = buscarCotacao   


function buscarCotacao(){
    const ajax = new XMLHttpRequest();
    ajax.open("GET","https://economia.awesomeapi.com.br/json/last/USD-BRL");
    ajax.send();
    ajax.onload = function(){
        
        let obj = JSON.parse(this.responseText);
    
        let cotacao =  Number(obj["USDBRL"].bid);
        let dolarInput = Number(document.getElementById("dolar").value);
        let calculo = (cotacao * dolarInput).toFixed(2);
        document.getElementById("saida").textContent = calculo;

    }
}
