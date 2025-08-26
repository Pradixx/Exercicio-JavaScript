function concatenando (...arrays) {
    return [].concat(...arrays);
}

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const array3 = [9, 10, 11, 12];
const concatenados = concatenando(array1, array2, array3);

console.log(concatenados);