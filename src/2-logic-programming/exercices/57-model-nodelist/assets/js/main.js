function main() {

    const container = document.querySelector('.container');

    const element = document.createElement('h1');

    element.appendChild(document.createTextNode('Boa noite'));

    container.appendChild(element);

}

main();