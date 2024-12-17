var text_descricao = document.querySelector("#descricao") 
var text_group     = document.querySelector("#group")
var text_valor     = document.querySelector("#valor")
var btnCadastrar   = document.querySelector("#btnCadastrar")

// console.log(text_group)
// console.log(btnCadastrar)
// console.log(text_dexcricao)

btnCadastrar.onclick = function(event) {
    event.preventDefault()

    if( text_descricao.value == "" ){
        alert('Preencher o campo Descrição')
        return false
    }

    if( text_group.value == "" ){
        alert('Preencher o campo Grupo')
        return false
    }

    if( text_valor.value == "" ){
        alert('Preencher o campo Valor')
        return false
    }

    alert("Cadastrado com sucesso")
}