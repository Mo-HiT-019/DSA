const pro1 = Promise.resolve("Promise1");
const pro2 =  new Promise((resolve)=>setTimeout(resolve,1000," Promise2"))
const pro3 =  new Promise((resolve)=>setTimeout(resolve,1000," Promi333"))

Promise.all([pro1,pro2,pro3]).then((result)=>{
    console.log(result)
})

Promise.race([pro1,pro2,pro3]).then((result)=>{
    console.log(result)
})