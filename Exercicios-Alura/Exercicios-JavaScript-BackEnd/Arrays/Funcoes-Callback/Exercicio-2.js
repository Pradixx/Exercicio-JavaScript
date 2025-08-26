const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
const lista = executaOperacaoEmArray(numeros, dobro);
console.log(lista);

function executaOperacaoEmArray (numeros, funcaoCallBack){
    return numeros.map(funcaoCallBack);
}

function dobro (num) {
    return  num * 2;
}