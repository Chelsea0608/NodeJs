let a = 20;
let b = 0;

let promise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(30)
    },2000)
})
   




promise.then((data) => {
    console.log(a+data);
})

