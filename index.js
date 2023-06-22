let promise = new Promise(function(resolve, reject) {
    const r = Math.random()
    if(r > 0.5){
        resolve('Success')
    }else{
        reject('Error')
    }
}).catch(result=>{
    console.log(result)
})

console.log(promise);