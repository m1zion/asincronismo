//Facil the enlasar then --> return
//Poderoso
//--no maneja excepciones
//--requiere codify para que funcione en todos los navegadores
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
//Agregaos la funcion de fetch 
function fetchData(urlAPI){
    return fetch(urlAPI);
}
//llamamos a la funcion
// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then (()=> {
//         console.log('Hola')
//     })
//     .catch(error => console.log(error));

//Hacer multiples llamados
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products)
       return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category=> {
        console.log(category.name);
    })
    .catch(error => console.log(error))
    .finally(()=>console.log('Bye...'))