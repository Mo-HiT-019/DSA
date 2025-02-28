const asyncTask1 = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Async 1")
        },1000)
    })
}

const asyncTask2 = (data)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(data+" Async 2")
        },2000)
    })
}

asyncTask1().then((result)=>{
    console.log(result)
    return asyncTask2(result);
}).then((result)=>{
    console.log(result)
})