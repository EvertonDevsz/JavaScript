function contar(){
    let inic = Number(document.querySelector("input#inic").value)
    let fim = Number(document.querySelector("input#fim").value)
    let passo = Number(document.querySelector("input#passo").value)
    
    let result = document.querySelector("div#contagem")
    
    if(passo == 0 || inic == "" || fim == ""){
        alert("Digite os valores ou um valor possível.")
    } else{
        result.innerHTML = "Contando... <br>"

        let contagem = inic
        if(contagem < fim){ 
            //Contagem crescente
            for(contagem; contagem <= fim; contagem += passo){
                result.innerHTML += `${contagem} 👉`
            }
        } else{ 
            //Contagem regressiva
            for(contagem; contagem >= fim; contagem -= passo){
                result.innerHTML += `${contagem} 👉`
            }
        }

        result.innerHTML += " 🏁"
    }

}
    
