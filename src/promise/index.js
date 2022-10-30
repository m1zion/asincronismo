//Retornar una promesa, Estructura basica

const somethingWillHappen  = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        }else{
            reject('Whoops!');
        }
    });
};

const somethingWillHappen2 = () =>{
    return new Promise((resolve,reject)=> {
        if(true){
            setTimeout(() => {
                resolve('True');
            },2000)
        }else{
            const error = new Error('Whoops');  //Muestra mas detalles de error
            reject(error);
        }

    });
}
somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

somethingWillHappen2()
    .then(response => console.log(response))
    .then(()=> console.log('Hola'))
    .catch(err => console.error(err));


//Ejecutar varias promesas
Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(response => {
    console.log('Array of results',response)
})
.catch(err =>{
    console.error(err)
});