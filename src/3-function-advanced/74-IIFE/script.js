// IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function (idade, peso, altura) {

    const sobrenome = 'Mendes';

    function criarNome(nome) {
        return `${nome} ${sobrenome}`;
    }

    function falaNome() {
        console.log(criarNome('Edgar'))
    }

    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.80);

// como é
(function () {

})();