import fetch from 'node-fetch';
const API = 'https://apidev.solucionesparatuauto.mx/api/v1';

function fetchData(urlAPI){
    return fetch(urlAPI);
}

//Hacer multiples llamados
fetchData(`${API}/orders/?offset=0&limit=3`)
    .then(response => response.json())
    .then(orders => {
        console.log(orders)
       return fetchData(`${API}/orders/${orders[0].id}`)
    })
    .then(response => response.json())
    .then(order => {
        console.log(order.items)
    })
    .catch(error => console.log(error))
    .finally(()=>console.log('Bye...'))