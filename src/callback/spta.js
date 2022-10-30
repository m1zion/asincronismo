const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;  
const API = 'https://apidev.solucionesparatuauto.mx/api/v1';

function fetchData(url_api,callback){   
    let xhttp = new XMLHttpRequest(); 
    xhttp.open('GET',url_api,true);
    xhttp.onreadystatechange = function(event){  
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null,JSON.parse(xhttp.responseText))
            }
            else{  
                const error = new Error('Error '+ url_api);
                return callback(error,null)
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/orders/?offset=0&limit=3`, function (error1,data1){
    if(error1) return console.log(error1);
    fetchData(`${API}/orders/${data1[0].id}`,function(error2,data2){
        if(error2) return console.log(error2);
            console.log(data1[0]);
            console.log(data2.items);
        });
});