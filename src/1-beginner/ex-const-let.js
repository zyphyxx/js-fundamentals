// EXERCICIOS SOBRE CONST E LET

/*
   Luiz otavio tem 30 anos, peso 84 kg
   tem  1.8 de altura e seu IMC é 25.92
   nasceu em 1980

 */
const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const peso = 84;
const altura = 1.80;
const idade = 2023 - 1980;

let imc = peso / (Math.pow(altura,2));

console.log('nome:'+ nome);
console.log('sobrenome:'+ sobrenome)
console.log('idade:'+ idade )
console.log(imc);

// template strings

console.log(`Nome: ${nome}, sobrenome: ${sobrenome},idade: ${idade}, IMC = ${imc}`)