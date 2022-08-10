let opcao = 'criptografia'  // decriptografia
let texto = "abacate"   //bcbdbuf
let cript = []
let resultado

/** mvddb */

let key = 1

if (opcao == 'decriptografia'){
    key = -1
}

for (var elemento in texto) {
    n = texto.charCodeAt(elemento) + key
    novo = String.fromCharCode(n)
    cript.push(novo)
}

resultado = cript.join("")

console.log(resultado)
