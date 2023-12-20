    // FOR IN - ESTRUTURA DE REPETEIÇÃO

const frutas = ['pera', 'maça', 'uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let i in frutas) {
    console.log(i);
}
//

for (let indice in frutas) {
    console.log(frutas[indice]);
}

//

const pessoa = {
    nome: 'Edgar',
    sobrenome: 'Mendes',
    idade: 30
};

for (let index in pessoa) {
    console.log(pessoa[index]);
}