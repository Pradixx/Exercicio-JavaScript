const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] === 14) {
        console.log(`${i} ${numeros[i]}`);
    } else {
        console.log(`${i} Não é número`);
    }
}