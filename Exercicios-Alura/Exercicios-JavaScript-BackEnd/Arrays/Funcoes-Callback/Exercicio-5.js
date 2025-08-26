const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach(function (num, indice){
    num = num * 3;
    console.log(`${indice} ${num}`);
}); 

const procurando = (elemento) => elemento === 18;
console.log(numeros.findIndex(procurando));

/** 
const procurando = numeros.findIndex((elemento) => elemento === 18);

if (procurando !== -1) {
    console.log(`${procurando}`);
} else {
    console.log("O numero não está no indice");
}
*/