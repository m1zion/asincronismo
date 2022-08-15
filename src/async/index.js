  /******************************/
  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();
  /******************************/
  //Usamos la estructura recomendada donde llamamos la funcion async con un await
  const fnAsync = () =>{
    return new Promise((resolve,reject) =>{
        (true) 
            ? setTimeout(() => resolve('Async'),2000)
            : reject (new Error('Error')); 
    });
  }

  
  const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
  }

  console.log('Before');
  anotherFn();
  console.log('After');