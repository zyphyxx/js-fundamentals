    // CLOSURES
    function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Edgar');
const funcao2 = retornaFuncao('Mendes');

console.log(funcao());
console.log(funcao2());
