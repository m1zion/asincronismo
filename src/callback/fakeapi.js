//https://fakeapi.platzi.com/
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;  
const API = 'https://api.escuelajs.co/api/v1';

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

fetchData(`${API}/products`, function (error1,data1){
    if(error1) return console.log(error1);
    fetchData(`${API}/products/${data1[0].id}`,function(error2,data2){
        if(error2) return console.log(error2);
            fetchData(`${API}/categories/${data2?.category.id}`,function(error3,data3){  //?optional changing
            if(error3) return console.log(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});