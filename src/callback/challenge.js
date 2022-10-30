//npm run challenge
//Son Universales
//-- Composicion complejo, anidado
//-- Flujo poco intuitivo

// Instalar XMLHttpRequest para hacer requisiciones http
// npm install xmlhttprequest --save
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;  //Instanciar variable
let API = "https://rickandmortyapi.com/api/character/";
//Funcion para llamar a la API
function fetchData(url_api,callback){   
    let xhttp = new XMLHttpRequest(); //Referencia al objeto
    xhttp.open('GET',url_api,true); //true = asincronismo
    xhttp.onreadystatechange = function(event){  //Validar el estado inicializado, 0,1,2,3,4

        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null,JSON.parse(xhttp.responseText))   //error,result  (parseamos el JSON)
            }
            else{  //De lo contrario mandamos el error en el callback
                const error = new Error('Error '+ url_api);
                return callback(error,null)
            }
        }
    }
    xhttp.send();
}

// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE

//En cada Data nos traemos una parte de los datos del Fetch
fetchData(API,function(error1,data1){ // https://rickandmortyapi.com/api/character/
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function(error2,data2){ // https://rickandmortyapi.com/api/character/1
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3){  //"https://rickandmortyapi.com/api/location/1",
            if(error3) return console.error(error3);
            console.log(data1.info.count)
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})