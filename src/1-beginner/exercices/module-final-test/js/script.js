
function meuEscopo () {

    const formulario = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = formulario.querySelector('.nome');

        console.log(nome.value);

        function cadastrar (nome){
            return nome.value;
        }




    }

    formulario.addEventListener('submit', recebeEventoForm);
    resultado.addEventListener('submit',);


}

meuEscopo();