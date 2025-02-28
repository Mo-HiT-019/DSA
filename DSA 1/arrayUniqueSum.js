function sum(ar){

    ar2=[];

    for(let i=0;i<ar.length;i++){
        if(!ar2.includes(ar[i])){
            ar2.push(ar[i]);
        }
    }

    let result=ar2.reduce((acc,curr)=>{
       
        return acc+=curr;
    },0)
    return result;

}

let arr=[1,1,4,6,5,5,5,5];

console.log(sum(arr));

