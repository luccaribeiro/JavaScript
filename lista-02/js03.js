let lista = [8, 4,6]
soma = 0
for(let elemento of lista){
    soma += parseInt(elemento)
}
let media = soma / lista.length
console.log(`O resultado da media dos números da lista é igual a ${media}`)