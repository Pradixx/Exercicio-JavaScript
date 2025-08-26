const clinica = [];

clinica.push("Gato");
console.log(adicionando());

clinica.push("Cachorro");
console.log(adicionando());

clinica.push("Peixe");
console.log(adicionando());

console.log(clinica);


removendo();
removendo();
removendo();

console.log(clinica);

function removendo(){
    clinica.shift();
    console.log("Animal removido");
}

function adicionando(){
    return "Animal adicionado";
}