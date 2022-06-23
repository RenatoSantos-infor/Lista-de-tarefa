let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){
    //Pega o valor digitado no input
    let valorInput = input.value;

    if((valorInput !== "" ) && (valorInput !==null) && (valorInput !== undefined)){
        
        //adiciona um indice a tarefa
        ++contador;
        
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcaTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-checkbox-blank-circle-outline"></i>                
        </div> 
        <div onclick="marcaTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">                
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>                
        </div>            
    </div>`;
     
    //Adiciona um novo item no main
    main.innerHTML += novoItem; 
    
    //Apaga o registro    
    input.value = "";
    input.focus();
    }

}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcaTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");

    if(classe == "item"){
        item.classList.add("clicado");

        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("mdi-checkbox-blank-circle-outline");    
        icone.classList.add("mdi-checkbox-marked-circle");

        //envia o item para final da fila
        item.parentNode.appendChild(item);

    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById("icone_"+ id);
        icone.classList.remove("mdi-checkbox-marked-circle");    
        icone.classList.add("mdi-checkbox-blank-circle-outline");

    }
}

input.addEventListener("keyup", function(event){
    
    //se teclou entrer
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
});