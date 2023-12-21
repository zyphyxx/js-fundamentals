/*
    ESCREVA UMA FUNÇÃO CHAMADA EPAISAGEM QUE
    RECEBE DOIS ARGUMENTOS, LARGURA E ALTURA
    DE UMA IMAGEM (NUMBER).

    RETORNE TRUE SE A IMAGEM ESTIVER NO MODO
    PAISAGEM.
 */

const ePaisagem = (altura, largura) => largura > altura ? true : false;

console.log(ePaisagem(100, 300));

function ePaisagem2(altura, largura) {
    parseInt(altura, largura);

    return largura > altura ? `Imagem esta em modo paisagem:${true}` : false;
}

console.log(ePaisagem2(200,500));