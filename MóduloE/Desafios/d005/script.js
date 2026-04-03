function gerarTabu(){
    let num = Number(document.querySelector("input#num").value)
    let tabu = document.querySelector("select#tabu")
    
    if(num == ""){
        alert("Por favor, digite um número")
    } else{
        tabu.innerHTML = ""
        
        for(let multi = 0; multi <= 10; multi ++){
            let item = document.createElement("option")

            item.text = `${num } x ${multi} = ${num*multi}`
            tabu.appendChild(item)
        }
    }
}