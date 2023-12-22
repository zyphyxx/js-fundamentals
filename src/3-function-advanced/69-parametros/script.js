    // argumentos que sustenta todos os argumentos enviados
    function funcao () {
        console.log(arguments);
    }

    funcao('valor',1,2,3,4,5,6,7);

    function funcao2 () {
        let total = 0;
        for (let argumento of arguments){
            total += argumento;
        }
        console.log(total);
    }

    funcao2(1,2,3,4,5,6,7);