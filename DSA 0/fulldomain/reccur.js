const fibb =(n)=>{
    if(n==1){
        return 0;
    }

    if(n==2){
        return 1;
    }

    return fibb(n-1)+fibb(n-2);
}

function fib(n){

    let num1=0;
    let num2=1;
    let sum;

    if(n==1){
        return 0
    }

    if(n==2){
        return 1;
    }

    for (let i =0; i<=n; i++){
        sum= num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
}

//console.log(fib(5))

function factorial(n){

    if(n==1){
        return n;
    }

    return factorial(n-1)*n

   
}

//console.log(factorial(4))



const prime=function(n){

    if(n<=1){
        return false;
    }

    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            return false;
        }
    }

    return true;
}

//console.log(prime(8));