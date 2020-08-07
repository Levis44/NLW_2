// Procurar o botao                                 //Quando clicar no botao
document.querySelector("#add-time").addEventListener("click", cloneField);

// Executar uma acao
function cloneField() {
    // Duplicar os campos (que campos?)
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //pegar campos
    const fields = newFieldContainer.querySelectorAll('input');

    //limpar campos
    fields.forEach(function(field) {
        //pegar o field e limpa
        field.value = ""
    })
   

    // Colocar na pagina (onde?)
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
};


    