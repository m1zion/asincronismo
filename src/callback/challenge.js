const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {  //cuando la mandemos a llamar, madaremos una funcion para nuestro callback
    let xhttp = new XMLHttpRequest();  //declaramos la referencia de http
    xhttp.open('GET',urlApi,true);
    xhttp.onreadystatechange = function (event)  { //Escuchar los estados
        if(xhttp.readyState === 4){ //4 completo la llamada
            if(xhttp.status = 200){
                callback(null,JSON.parse(xhttp.responseText));
            }
        } else {
            const error = new Error('Error' + urlApi);
            return callback(error,null);
        }
    } 
    xhttp.send();
}