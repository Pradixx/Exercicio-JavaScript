const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
];

const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
const procurado = todasAsTurmas.find(nome => nome === 'Carlos Oliveira');
const naoAchou = todasAsTurmas.find(nome => nome === 'Jonas Gabriel');

if (procurado) {
    console.log(`Aluno procurado: ${procurado}`);
} else {
   console.log("Aluno não encontrado");
}

if (naoAchou) {
    console.log(`Aluno procurado: ${naoAchou}`);
} else {
   console.log("Aluno não encontrado");
}