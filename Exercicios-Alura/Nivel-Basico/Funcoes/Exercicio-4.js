function validandoNumeroMaior(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            return `${num1} é o maior número`;
        } else {
            return `${num3} é o maior número`;
        } 
    } else if (num2 > num3) {
        return `${num2} é o maior número`;
    } else {
        return `${num3} é o maior número`;
    }
}

console.log(validandoNumeroMaior(9, 7, 5));
console.log(validandoNumeroMaior(7, 14, 5));
console.log(validandoNumeroMaior(7, 5, 11));
