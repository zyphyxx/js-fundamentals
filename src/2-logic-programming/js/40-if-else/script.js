/*
    Entre 0 -  11 - Bom dia
    entre 12 - 17 - Boa tarde
    entre 18 - 23 - Boa noite

 */

const hora = 2;

if (hora >= 0 && hora <= 11) {
    console.log('bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('boa noite');
}else {
    console.log('NaN');
}
