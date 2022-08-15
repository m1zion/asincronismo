const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {  //cuando la mandemos a llamar, madaremos una funcion para nuestro callback
    let xhttp = new XMLHttpRequest();  //declaramos la referencia de http
    xhttp.open('GET',urlApi,true);
    xhttp.onreadystatechange = function (event)  { //Escuchar los estados
        if(xhttp.readyState === 4){ //4 completo la llamada
            if(xhttp.status = 200){
                callback(null,JSON.parse(xhttp.responseText));
            }
            else {
                const error = new Error('Error' + urlApi);
                return callback(error,null);
            }
        }
    } 
    xhttp.send();
}
//Hacemos 3 peticiones de fetchdata para efectos del curso
//1 llamada a el elemento
//2 Llanada a un producto
//3 Llamada a la categoria

fetchData(`${API}/products`, function(error1,data1) {
    if(error1) return console.error(error1);
        //console.log(data1[0]);    
        //console.log(data1[0].title); 
        fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
            if(error2) return console.error(error2);
                fetchData(`${API}/categories/${data2?.category?.id}`,function(error3,data3){
                    if(error3) return console.log(error3);
                        console.log(data1[0]);
                        console.log(data2.title);
                        console.log(data3.name);
                });
        });
});