let numero = Number(prompt("Digite um numero:"));

const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> Raiz Quadrada: ${Math.pow(numero, 2)}</p>
                    <p>${numero} é inteiro: ${Number.isInteger(numero)}</p>
                    <p>${numero} é NaN: ${Number.isNaN(numero)}</p>
                    <p>Arredondado para baixo: ${Math.floor(numero)}</p>
                    <p>Arredondado para cima: ${Math.ceil(numero)}</p>
                    <p>Com duas casas decimais: ${parseFloat(numero.toFixed(2))}</p>`;