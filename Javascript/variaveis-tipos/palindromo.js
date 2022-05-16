// verificar se uma palavra é palindromo
// para ser palindromo uma palavra pode ser lida de forma normal e de traz para frente. 

// solução 1
function verificaPalindromo(string) {
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") == string
}

// let myVar = null;

console.log(verificaPalindromo("ovo"));
// console.log(verificaPalindromo(myVar)); - string inexistente

// solução 2
function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] != string[string.length - 1 - i]) {
            return false;
        }
        return true;
    }
}

console.log(verificaPalindromo2("abba"));