let opcao = 2 /* opção 1 criptografia, opção2 - decriptografia* */
let texto = "Mvddb!Ovoft!Sjcfjsp"
let cript = []
/** mvddb */
if (opcao == 1){
    for(var elemento in texto){
        n = texto.charCodeAt(elemento) + 1
        novo = String.fromCharCode(n)
        cript.push(novo)
    }
    console.log(cript.join(""))
} else{
    for(var elemento in texto){
        n = texto.charCodeAt(elemento) - 1
        novo = String.fromCharCode(n)
        cript.push(novo)
    }
    console.log(cript.join(""))
}
