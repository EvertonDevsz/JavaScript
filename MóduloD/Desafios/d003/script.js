const ano = new Date().getFullYear()

function verifAge(){
    let anonas = Number(document.querySelector("input#anonas").value)
    
    if(anonas == 0 || anonas > ano){
        alert("[ERRO] Verifique os dados e tente novamente")
    } else{
        let idade = ano - anonas

        let img = document.createElement("img")
        img.setAttribute("id", "foto")

        let fsex = document.getElementsByName("sx")
        let gênero = ""
        if (fsex[0].checked){
            gênero = "Homem"
            if(idade >= 0 && idade < 10){
                img.setAttribute("src", "images/criancaM.jpg")
            } else if (idade < 21){
                img.setAttribute("src", "images/jovemM.jpg")
            } else if (idade < 50){
                img.setAttribute("src", "images/adultos.jpg")
            } else{
                img.setAttribute("src", "images/velho.jpg")
            }
        } else {
            gênero = "Mulher"
            if(idade >= 0 && idade < 10){
                img.setAttribute("src", "images/criancaF.jpg")
            } else if (idade < 21){
                img.setAttribute("src", "images/jovemF.jpg")
            } else if (idade < 50){
                img.setAttribute("src", "images/adultos.jpg")
            } else{
                img.setAttribute("src", "images/velha.jpg")
            }
        }

        document.querySelector("div#res").innerHTML = `Detectamos  ${gênero} com ${idade} anos`

        res.appendChild(img) 
    }
}