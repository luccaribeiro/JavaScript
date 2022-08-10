let n1 = 4
let n2 = 2

let validado = true
if (typeof(n1) != "number") {
    console.log("Número invalido: ", n1)
    validado = false
}
if (typeof(n2) != "number") {
    console.log("Número invalido: ", n2)
    validado = false
}

if (validado) {
    let soma = n1 + n2
    console.log(`A soma de ${n1} + ${n2} é igual a ${soma}`)
}