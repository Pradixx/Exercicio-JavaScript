function somando (array) {
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

let soma = 0;
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

console.log(somando(numeros));
