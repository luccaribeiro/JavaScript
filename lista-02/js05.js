lista = [1,5,7,9,10,4,1]
maior = 0
for(let elemento in lista){
    if (elemento == 0){
        maior = lista[elemento]
    }
    if (lista[elemento] > maior){
        segundo_maior = maior
        maior = lista[elemento]
    }
}

console.log(`O Segundo maior número da lista é ${segundo_maior}`)