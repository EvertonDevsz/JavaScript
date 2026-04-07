let basedad = []
let result = document.querySelector("div#result")
let valornum = document.querySelector("input#valnum")

//adicionar valores
document.querySelector("input#adic").addEventListener("click", adicionar)
function adicionar(){
    result.innerHTML = ""
    let num = Number(valornum.value)

    if(valornum.value === "" || num > 100 || basedad.includes(num)){
        alert("Valor inválido ou já encontrado na lista.")
    } else{
        basedad.push(num)
        basedad.sort((a, b) => (a - b))
    
        let option = document.createElement("option")
        option.textContent = `O valor ${num} foi adicionado`
        document.querySelector("select#show").append(option)
       
    }
}

//analisar e mostrar calculos
document.querySelector("input#finali").addEventListener("click", analisar)
function analisar(){
    if(basedad.length == 0){
        alert("Adicione valores antes de finalizar.")
    } else{
        let soma = 0
        for(let c = 0; c < basedad.length; c++){
            soma += basedad[c]
        }

        result.innerHTML = 
        `
            <p>Ao todo, temos ${basedad.length} número cadastrados</p>
            <p>O maior valor informado foi ${basedad.at(-1)}</p>
            <p>O menor valor informado foi ${basedad[0]}</p>
            <p>Somando todos os valores, temos ${soma}</p>
            <p>A média dos valores digitados é ${soma / basedad.length}</p>
        `
    }
}

document.querySelector("input#limp").addEventListener("click", limpar)
function limpar(){
    basedad = []
    result.innerHTML = ""
    document.querySelector("select#show").innerHTML = ""
}