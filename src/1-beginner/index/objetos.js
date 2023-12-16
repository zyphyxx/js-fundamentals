// OBJETOS BASICO

const aluno = {
    nome: 'Edgar',
    sobrenome: 'Mendes',
    idade: 30
};

console.log(aluno.nome);
console.log(aluno.sobrenome);
console.log(aluno.idade);

function criarAluno (nome, sobrenome, idade){
    return { nome, sobrenome, idade};
}

const alun = criarAluno('Edgar','Sousa',30);
console.log(alun.nome);