// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO DE OBJETOS

const pessoa = {
    nome: 'Edgar',
    sobrenome: 'Mendes',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

console.log(pessoa);

// atribuiçao via desestruturaçao
const {nome} = pessoa;
console.log(nome);

console.log('-----------');

const {sobrenome, idade} = pessoa;
console.log(sobrenome, idade);

console.log('-----------');

const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);
