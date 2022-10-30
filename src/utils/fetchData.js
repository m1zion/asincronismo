//Convertimos la funcion arrow functions de ECMAsript 6
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;  //Instanciar variable
//Funcion para llamar a la API transpformar a ecmascript6
const fetchData = (url_api) => {  
    return new Promise((resolve,reject) => {
        const xhttp = new XMLHttpRequest(); //Referencia al objeto
        xhttp.open('GET',url_api,true); //true = asincronismo
        xhttp.onreadystatechange = (() => {  //Validar el estado inicializado, 0,1,2,3,4
    
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api))
            }
        })
        xhttp.send();
    }); 
}

module.exports = fetchData;
