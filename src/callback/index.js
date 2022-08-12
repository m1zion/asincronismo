//Funcion que pasa como argumento otra funcion
function sum(num1,num2){
    return num1 + num2;
}
function calc(num1,num2, sumar) { //callback es la funcion que ejecuta otra funcion
    return sumar(num1,num2);
};

console.log(calc(2,2,sum));

//Pasar una funcion  ejecutarla en cierto tiempo setTimeOut es un ejemplo de callback
setTimeout(function() {
    console.log('Hola');
}, 2000)

function greet(name){
    console.log(`Hola ${name}`);
}
setTimeout(greet,2000,'Misael');