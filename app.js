//indice; condicional; incremento o decremento

// for (let index = 0; index < 5; index++) {
//     if (index == 3) {
//         continue;
//     }
    
//     debugger;
// }

// console.log('Terminó');


//Funciones
//paramtro es una variable para darle una función
function suma() {
    let numero1 = document.getElementById("#numero1").value;
    let numero2 = document.getElementById("#numero1").value;
    let suma = parseInt(numero1) + parseInt(numero2);
    console.log(suma);

    let span = document.querySelector("#resultado");

    span.innerHTML = suma;
    
}

// Funciones (Inicialización de para metros)

// function suma(numero1, numero2) {
//     resultado = (numero1, numero2);
//     console.log(resultado);
//     return a+b+c;
// }


// const numero = [5,6,7];

// let resultadodefuncion = suma(...numero);
// console.log(resultadodefuncion)

// function callback(a,b, saludo()=>{console.log('Hola imanol')}){

// }

// let holaArrow = () => console.log('Hola')

// function functionsaludar(nombre){
//     console.log("Hola")
// };

// functionsaludar('Imanol');

// let hola = function(nombre){
//     console.log ('Hola' + nombre + "Mundo Anonimo")
// };
// hola('Alex');

// Operador Ternario "?"

//Eventos en el mouse

let boton = document.querySelector('.botonClick');

boton.addEventListener('onclick', function(){
    console.log('Dimos Click en el boton')
    boton.classList.add('Azul');

})

let boton2 = document.querySelector('Agregar');

boton2.addEventListener('onclick', function(){
    
})

boton.addEventListener('mouseover', function(){
    console.log('Estamos sobre el boton')

})

boton.addEventListener('mouseout', function(){
    console.log('Estamos fuera del boton')

})

//Eventos del teclado

window.addEventListener('keydown', (e) =>{
    console.log('Pulsó una tecla');
    console.log(String.fromCharCode(e.keyCode));
})

window.addEventListener('keypress', (e) =>{
    console.log('Presionó una tecla');

})

window.addEventListener('keyup', (e) =>{
    console.log('Dejo de presionar una tecla');
})

window.addEventListener('load', (e) =>{
    console.log('Cargando...');
})


// function myfunction(){
//     let x = document.getElementById("BotonClick").addEventListener("click", displayDate);

//     x[0].style.BackgrundColor = "text-primary";

// }

