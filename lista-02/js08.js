let lista = [1,2,3,4,1,1]
par = 0
for(let elemento of lista){
    if(elemento % 2 == 0){
        par += 1
    } 
}
console.log(`A lista tem ${lista.length} números sendo ${par} números pares e ${lista.length - par} números ímpares`)