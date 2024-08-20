function alterarTexto(texto, color = "black"){
    let contador = document.getElementById("contagem");
    contador.style.color = color;
    contador.textContent = texto;
}

function ativarContagem(){
    // executa apenas uma vez após o tempo determinado 
    // alterarTexto("Começou A Contagem!","purple");
    // tempo = setInterval(
    //     function(){ alterarTexto("Terminou A Contagem!","green") },
    //     3000
    // );
    let c = 10
    cronometro = setInterval(function(){
        alterarTexto(--c,"blue");

        if(c == 0){
            alterarTexto("Tempo Finalizado!","green")
            desativarContagem()
        }

    },1000);
};

function desativarContagem(){
    // clearTimeout(tempo);
    // alterarTexto("Parou A Contagem!","red");
    clearInterval(cronometro);
}