 // Declaração de função (Function hoisting)

 falaOi();
 function falaOi(){
    console.log('Oie');
 }

 // Fist-class objects (Objetos de primeira classe)
 // funsction expression

 const souUmDado = function () {
     console.log('Sou um dado');
 }

 souUmDado();

 // Arrow Function

 const funcaoArrow = () => {
     console.log('Sou uma arrow function');
 }

 funcaoArrow();