let letra = "a"
let vogais = ["a", "e", "i", "o", "u"]

let resultado = "Não é vogal"

if (vogais.includes(letra)) {
    resultado = "É vogal"
}

console.log(resultado)