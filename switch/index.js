function alterarCor(color){
    let fundo = document.getElementsByTagName("body")[0];    
    fundo.style.backgroundColor = color;
}

function alterar(){
    let cor = document.getElementById("color").value;
    switch(cor){
        case "red":
            alterarCor(cor);
            break
        case "blue":
            alterarCor(cor);
            break;
        case "green":
            alterarCor(cor);
        default: break;
    };
};


