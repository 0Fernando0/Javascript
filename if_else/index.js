let hora = new Date().getHours();

function comprimentar(){
    if(hora > 18){
        return alert("boa noite!");
    }
    else if(hora > 11){
        return alert("boa tarde!");
    }
    return alert("boa dia!");
}

function verificar(){
    let nome = document.getElementById("nome").value;

    if(nome == "" || nome == null){
        return alert("Insira Algum Nome Antes Né T_T");
    }
    return alert(`olá ${nome}, Seja Bem-Vindo!`);
}