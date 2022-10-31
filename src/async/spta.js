import fetch from 'node-fetch';
const API = 'https://apidev.solucionesparatuauto.mx/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data =  await response.json();
    return data;
}

const anotherFunction = async (urlApi) =>{
    try {
        const orders  = await fetchData(`${urlApi}/orders/?offset=0&limit=3`);
        const order = await fetchData(`${urlApi}/orders/${orders[0].id}`);
        console.log(orders);
        console.log(order.items);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction(API);