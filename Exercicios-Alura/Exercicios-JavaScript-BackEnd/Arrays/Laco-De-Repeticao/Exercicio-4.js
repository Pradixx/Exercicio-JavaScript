const numeros = [1, 2, 3, 4, 5, 6];
let x = 0;
let y = 0;


for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 2){
        x = numeros[i];
    } else if (numeros[i] > 5) {
        y = numeros[i];
    } 
}

console.log(`${x}, ${y}`);