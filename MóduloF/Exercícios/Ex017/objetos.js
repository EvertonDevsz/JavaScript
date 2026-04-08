let objeto = {
    nome: "jorge", 
    idade: 54, 
    peso: 70,
    engordar(p = 0){
        console.log("Engordou")
        this.peso += p
    }
}

objeto.engordar(2)

console.log(`${objeto.nome} pesa ${objeto.peso}Kg`)