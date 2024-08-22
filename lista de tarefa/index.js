let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
const re =  new RegExp("^\\s*$");

function limparCampo(){
    input.value = "";
    input.focus();
}

function createSpan(args,text = null){
    let elemento = document.createElement("span");
    for (const [key,value] of Object.entries(args)) {
        elemento.setAttribute(key,value);
    }
    if(text != null){
        elemento.textContent = text;
    }
    return elemento
}

function createDiv(){

    contador++;
    let id_create = `icone_${contador}`
    let elementos = [
        createSpan({
            class:"item-icone desmarcado",
            id: id_create,
            "onclick": `concluirTarefa(${id_create})`
        }),
        createSpan({class:"item-nome"},input.value),
        createSpan({class:"item-button","onclick": `deletar(${contador})`})
    ]

    let createItem = document.createElement("div");
    createItem.setAttribute("class", "item");
    createItem.setAttribute("id", contador);
    elementos.forEach(elemento => { createItem.appendChild(elemento); });
    return createItem;

}

function deletar(id){ document.getElementById(id).remove() }

function concluirTarefa(id){
    let item = id.getAttribute("id");
}

function addTarefa(){
    if(re.test(input.value)){return}
    document.getElementById("area").appendChild(createDiv());
    limparCampo();
}

input.addEventListener("keyup",function(event){
    // se apertar enter
    if(event.code === "Enter"){
        addTarefa();
    }
})