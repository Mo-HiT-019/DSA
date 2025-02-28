const int = setInterval(()=>{
    console.log("Hello")
},1000);

setTimeout(()=>{
    clearInterval(int)
},4000)