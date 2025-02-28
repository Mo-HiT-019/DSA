
const bubbleSort = (ar)=>{

    for(let i=0;i<ar.length;i++){
        for(let j=0;j<ar.length-i-1;j++){
            if(ar[j]>ar[j+1]){
                [ar[j],ar[j+1]]=[ar[j+1],ar[j]];
            }
        }
    }

    return ar;
}

console.log(bubbleSort([23,2,4,45,6,7]))