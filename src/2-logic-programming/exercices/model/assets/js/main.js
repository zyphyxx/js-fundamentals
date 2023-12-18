const form = document.querySelector('#form');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const resultado = document.querySelector('#resultado');
const botao = document.querySelector('#botao');

form.addEventListener('submit', function (evento) {

    evento.preventDefault();

    const meuPeso = peso.value;
    const minhaAltura = altura.value;
    const imc = Number(meuPeso / Math.pow(minhaAltura, 2)).toFixed(2);

    console.log(`meu peso: ${meuPeso}, minha altura: ${minhaAltura}, resultado: ${imc}`)
    resultado.textContent = `Seu IMC é: ${imc}`;

    if (imc <= 18.5){
        resultado.textContent = `Seu IMC é ${imc} e você esta Abaixo do peso`
    } else if (imc <= 24.9){
        resultado.textContent = `Seu IMC é ${imc} e você esta com Peso Normal`
    }else if (imc <= 29.9){
        resultado.textContent = `Seu IMC é ${imc} e você esta com Sobrepeso`
    }else if (imc <= 34.9){
        resultado.textContent = `Seu IMC é ${imc} e você esta com Obesidade grau 1`
    }else if (imc <= 39.9){
        resultado.textContent = `Seu IMC é ${imc} e você esta com Obesidade grau 2`
    } else if (imc >= 40){
        resultado.textContent = `Seu IMC é ${imc} e você esta com Obesidade grau 3`
    } else {
        resultado.textContent = `Digite um numero valido`
    }

})










