let valores = [8, 1, 7, 4, 2, 9]

//Com for padrão
for(let chave = 0; chave < valores.length; chave++){
    console.log(`A posição ${chave} tem o valor ${valores[chave]}`)
}

//Com for e in
for(let chave in valores){
    console.log(`A posição ${chave} tem o valor ${valores[chave]}`)
}

//Com for e of
for(let valor of valores){
    console.log(valor)
}