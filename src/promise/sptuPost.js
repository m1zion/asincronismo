import fetch from 'node-fetch';
const API = 'https://apidev.solucionesparatuauto.mx/api/v1';
function postData(urlApi, data){
    const response = fetch(urlApi,{
        method: 'POST', //Siempre en mayusculas
        mode: 'cors',  //Lo dejamos por default
        credentials: 'same-origin',  //Autenticacion
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}
const data = {
    "email": "prueba@platzi.com",
    "password": "password123",
    "role": "customer"
}
  postData(`${API}/users/`, data)
  .then(response=> response.json())
  .then(data => console.log(data));




