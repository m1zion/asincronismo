// Muy importante instalar la extensión Code Runner, presionar las teclas Ctrl + P y pegar: 
// ext install formulahendry.code-runner y dar ENTER
//Funcion que recibe como argumento una funcion
function sum(num1,num2){
    return num1+num2;
}

function calc(num1,num2, callback){
    return callback(num1,num2);
}
console.log (calc(2,2,sum));

function date(callback){  //el callback es printDate se ejecutara en la funcion setTimeout con 3 segundos de diferencia
    console.log("HOLA");   
    setTimeout(function(){
        let date = new Date;
        callback(date);
    },3000)
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);