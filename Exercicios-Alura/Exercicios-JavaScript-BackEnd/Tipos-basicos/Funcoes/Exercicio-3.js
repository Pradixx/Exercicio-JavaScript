function validandoPalindromo(palavra){
    
    // Converte a string para array, inverte o array, e junta novamente em string
    // split -> separa a String em array
    // reverse -> inverte o array
    // join -> junta o array em String

    if (palavra === palavra.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(validandoPalindromo("reviver"));
console.log(validandoPalindromo("Kleber"));