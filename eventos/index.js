// onclick => disparado quando recebe um click
// ondblclick => disparado quando click duplo
// onmouseover => disparado quando o mouse está sobre
// onmouseout => disparado quando o mouse sai do objeto
// onmousemove => disparado quando o mouse é movido no elemento
// onmousedown => disparado quando o click do botão for pressionado
// onmouseup = > disparado quando o click do mouse é solto
// onfocus => disparado quando o elemento recebe o foco. Válido para input
// onchange => disparado quando há uma mudança no conteúdo. "Ao mudar"
// onblur => disparado quando o elemento perde o foco
// onkeydown => disparado quando uma tecla é pressionada 
// onkeypress => disparado quando uma tecla é pressionada e solta
// onkeyup => disparado quando uma tecla é solta sobre o elemento
// onload => disparado quando a página terminou de ser carregada. Body
// onresize => disparado quando há um redimencionamento da janela

function eventoClick() {
    document.body.style.backgroundColor = "white";
    alert("acionou o evento clique");
}

function alterarCorFundo(cor){
    document.body.style.backgroundColor = cor;
}
/////////////////////////
var elemento = document.getElementById("caixa");
function corVermelho(){
    elemento.style.backgroundColor = "red";
}

function corAzul(){
    // let elemento = document.getElementById("caixa");
    elemento.style.backgroundColor = "blue";
}

function limparTela(){
    document.getElementById("campo").value = "";
}

function teclaPressionada(){
    console.log(document.getElementById("campo").value);
}