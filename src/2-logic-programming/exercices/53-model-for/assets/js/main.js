function main() {

    const section1 = document.querySelector('.container');

    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'}
    ];

    const div = document.createElement('div');

    for (let i = 0; i < elementos.length; i++) {
        const {tag, texto} = elementos[i];
        const tagcriada = document.createElement(tag);
        tagcriada.innerHTML = texto;
        div.appendChild(tagcriada);
    }
    section1.appendChild(div);


}

main();