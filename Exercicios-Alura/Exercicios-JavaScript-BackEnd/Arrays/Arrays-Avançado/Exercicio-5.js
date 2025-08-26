function descobrindo (array) {
    return array.filter(num => num % 3 === 0 && num > 5);
}

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
const listaCompleta = descobrindo(numeros);

console.log(listaCompleta);
