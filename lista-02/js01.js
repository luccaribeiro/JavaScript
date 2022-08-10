let lista = [0,1,2,3,4,5,6,7,8,9]

for(let elemento of lista){
    if (elemento % 2 == 0){
        console.log(`O número ${elemento} é par`)
    } else{
        console.log(`O número ${elemento} é impar`)
    }
}