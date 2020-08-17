//procurar o botão 
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)


//executar uma acao
function cloneField(){

    //duplicar os campos. Quais campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    
    //pegar o campo, que campo? 
    const fields = newFieldContainer.querySelectorAll('input')


    //para cada campo, limpar
    fields.forEach(function(field){
        field.value = ""
    })

    //colocar na pagina
   document.querySelector("#schedule-items").appendChild(newFieldContainer)

   
}
    

  