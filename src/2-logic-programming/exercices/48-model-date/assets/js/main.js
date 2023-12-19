function main() {

    const h1 = document.querySelector('.h1');
    const date = new Date();

    function getSemana() {

        const semana = date.getDay();
        let text;

        switch (semana) {
            case 0:
                text = `Domingo`;
                break;
            case 1:
                text = `Segunda-Feira`;
                break;
            case 2:
                text = `Terça-Feira`;
                break;
            case 3:
                text = `Quarta-Feira`;
                break;
            case 4:
                text = `Quinta-Feira`;
                break;
            case 5:
                text = `Sexta-Feira`;
                break;
            case 6:
                text = `Sabado-Feira`;
                break;
            default:
                text = `data invalida`;

        }

        return text;

    }

    function getDia() {
        return date.getDate();
    }

    function getMes() {
        const mesesDoAno =
            ["Janeiro", "Fevereiro", "Março",
            "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro",
            "Outubro", "Novembro", "Dezembro"];

        return mesesDoAno[date.getMonth()];
    }

    function getAno() {
        return date.getFullYear();
    }

    function getHoras() {
        return date.getHours();
    }

    function getMin() {
        return date.getMinutes();
    }

    h1.innerHTML += `${getSemana()}, ${getDia()} de ${getMes()} de ${getAno()}, as ${getHoras()}:${getMin()} `
}

main();