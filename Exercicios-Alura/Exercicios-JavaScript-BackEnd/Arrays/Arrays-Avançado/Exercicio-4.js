function descobrindoPares (array) {
    return array.filter(num => num % 2 === 0);
}

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
const listaCompleta = descobrindoPares(numeros);

console.log(listaCompleta);