function carregar(){
    let msg = document.querySelector("div#msg")
    let img = document.querySelector("img#imagem")
    let hora = new Date().getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = "images/manha.jpg"
        document.body.style.background = "#E0AA53"
    } else if(hora >= 12 && hora < 18){
        img.src = "images/tarde.jpg"
        document.body.style.background = "#814E23"
    } else{
        img.src = "images/noite.jpg"
       document.body.style.background = "#4A3A2D"
    }
}