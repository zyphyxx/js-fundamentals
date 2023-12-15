// FUNÇOES BASICO

function saudacao(nome){
    return `Bom dia: ${nome}`;
}

const variavel = saudacao('Edgar');
console.log(variavel);

function soma (x , y) {
    return x + y;
}

let somar = soma(2,2);
console.log(somar);

const raiz = function (n){
    return Math.pow(n,2);
};

console.log(raiz(5));

