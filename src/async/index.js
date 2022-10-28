const doSomethingAsync =  () => {
    return new Promise ((resolve,reject) =>{
        (true)
        ? setTimeout(()=> resolve('Do something Async'),3000)
        : reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}
console.log('Before');
doSomething();
console.log('After');

/******RESULT*******/
//Before
//After   3 secs...
//Do something Async


//Cachar errores
const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something)
    } catch (error){
        console.error(error)
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 2');

/******RESULT*******/
//Before
//After
//Before 1
//After 1  3 secs...
//Do something Async