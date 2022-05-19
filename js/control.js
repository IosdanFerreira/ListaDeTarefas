let input = document.getElementById("txtTarefas");
let btnAdd = document.getElementById("button");
let main = document.getElementById("areaLista");

//Configuando click do botão "Adicionar"
function addTarefa(){
    let valorInput = input.value;

    //Gerar no novo ítem
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        let novoItem = `<div class="item" id="item">
        <div class="item-icone">
            <i class="mdi mdi-circle-outline"></i>
        </div>
        <div class="item-nome">${valorInput}</div>
        <div class="item-botao">
            <button class="delete" id="delete">
                <i class="mdi mdi-delete"></i>
                Deletar
            </button>
        </div>
    </div>`

    //Adicionar novo ítem no main
    main.innerHTML += novoItem

    //Zerar input após o click
    input.value = "";
    input.focus();

    }
}
//Se teclar ENTER
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13){
        btnAdd.click()
    }
})