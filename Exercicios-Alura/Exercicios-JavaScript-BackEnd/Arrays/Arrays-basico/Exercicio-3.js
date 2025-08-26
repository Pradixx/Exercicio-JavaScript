const meuArray = [];

meuArray.push(2);
meuArray.push(5);
meuArray.push(8);

console.log(meuArray);

const indice = meuArray[0] * 2;
meuArray.shift();
meuArray.unshift(indice);

console.log(meuArray);
