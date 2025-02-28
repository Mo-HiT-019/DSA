const curried=(a)=>{
    return function(b){
        return a+b;
    }
}

const a = curried(2);
console.log(a(5))