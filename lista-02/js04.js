lista = [1,5,7,8,10,4,1]
maior = 0
for(let elemento in lista){
    if (elemento == 0){
        maior = lista[elemento]

    }
    if (lista[elemento] > maior){
        maior = lista[elemento]
    }
}
console.log(`O maior número da lista é ${maior}`)