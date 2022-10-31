import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

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
    "title": "New Product Course 6891",
    "price": 9998,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

  postData(`${API}/products`, data)
  .then(response=> response.json())
  .then(data => console.log(data));