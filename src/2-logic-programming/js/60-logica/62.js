/* ESCREVA UMA FUNÇÃO QUE RECEBE UM NUMERO E
RETORNE O SEGUINTE:
NUMERO É DIVISIVEL POR 3 = FIZ
NUMERO É DIVISIVEL POR 5 = BUZZ
NUMERO E DIVISIVEL POR 3 E 5 = FIZBUZZ
NUMERO NÃO E DIVISIVEL POR 3 E 5 = RETORNE O PROPRIO NUMERO
CHECAR SE O NUMERO É REALMENTE UM NUMERO = RETORNA O PROPRIO NUMERO
USE A FUNÇÃO COM NUMERO DE 0 A 100
 */

function main() {
    function recebe(numero) {

        let num = parseInt(numero);

        if ((num % 3) === 0 && (num % 5) === 0) {
            return 'Fizzbuzz '
        } else if (num % 3 === 0) {

            return 'Fizz - numero é divisivel por 3';

        } else if (num % 5 === 0) {

            return 'Buz - numero é divisivel por 5'

        } else {
            return num;
        }

    }

    for (let i = 0; i < 100; i++) {
        console.log(i, recebe(i));
    }
}

main();