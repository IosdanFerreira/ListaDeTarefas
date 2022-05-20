let input = document.getElementById("txtTarefas");
let btnAdd = document.getElementById("button");
let main = document.getElementById("areaLista");
let contador = 0;

//Configuando click do botão "Adicionar"
function addTarefa(){
    let valorInput = input.value;

    //Gerar no novo ítem
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        ++contador
        let novoItem = `<div class="item" id="task-${contador}" id="item" >
        <div class="item-icone" id="item-icone" onclick="marcarTarefa(${contador})">
            <i id="icone-${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div class="item-nome" onclick="marcarTarefa(${contador})">${valorInput}</div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="btnDelete" id="btnDelete">
                <i class="mdi mdi-delete"></i>
                Deletar
            </button>
        </div>
    </div>`

    //Adicionar novo ítem no main
    main.innerHTML += novoItem

    //Limpar input após o click
    input.value = "";
    input.focus();

    }
}
//Deletar tarefa
function deletar(id) {
    let tarefa = document.getElementById("task-"+id);
    tarefa.remove();
}
//Se teclar ENTER
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13){
        btnAdd.click()
    }
})
//Marcar e desmarcar tarefa feita
function marcarTarefa(id){
    let item = document.getElementById("task-"+id);
    let classe = item.getAttribute('class');

    if(classe == "item"){
        item.classList.add('clicado');

        var icone = document.getElementById("icone-"+id);
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");
        item.parentNode.appendChild(item)
    }else{
        var icone = document.getElementById("icone-"+id);
        item.classList.remove('clicado')
        item.classList.add('item');
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    }
}