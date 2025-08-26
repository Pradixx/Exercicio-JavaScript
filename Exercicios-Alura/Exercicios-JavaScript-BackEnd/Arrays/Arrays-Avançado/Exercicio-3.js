const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const coresLista = coresLista1.concat(coresLista2);

const coresListaAtualizada = new Set (coresLista);

console.log(coresListaAtualizada);