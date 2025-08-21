function validandoIdade(nome, idade){
    if (idade >= 18) {
        return `${nome} você é maior de idade`;
    } else {
        return `${nome} você é menor de idade`;
    }
}

console.log(validandoIdade("Diego", 18));
console.log(validandoIdade("Jonas", 14));