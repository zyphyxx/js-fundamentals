    // OBJETO DATE

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;

const data = new Date(); // 01/01/1970 timestamp unix ou epoca unix

    function zeroAEsquerda(num) {
        return num >= 10 ? num : `0${num}`
    }
function formatarData () {

    const dia = data.getDate().toString();
    const mes = data.getMonth();
    const ano =data.getFullYear();
    const minutos = zeroAEsquerda(data.getMinutes());
    const semana = zeroAEsquerda(data.getDay());
   return `${dia}/${mes}/${ano}/${minutos}/${semana}`

}

console.log(formatarData());

