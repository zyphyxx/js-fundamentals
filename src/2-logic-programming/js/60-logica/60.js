// escreva uma função que recebe 2 numeros e retorne o maior deles

function max (numOne, numTwo) {


    if (numOne > numTwo) {
        return parseInt(numOne);

    } else if (numTwo > numOne) {
        return parseInt(numTwo);

    } else if (numOne === numTwo) {
        return `os numeros ${numOne} e ${numTwo} são iguais`;

    } else {
        return NaN;
    }

}

const max2 = (x , y) => {
    return x > y ? x : y;
}

console.log(max2('8',7));

console.log(max('a', 'b'));



