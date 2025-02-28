const selectionSort=(ar)=>{
    for(let i=0;i<ar.length;i++){
        let minIndex=i
        for(let j=i+1;j<ar.length;j++){
            if(ar[j]<ar[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex!==i){
            [ar[i],ar[minIndex]]=[ar[minIndex],ar[i]];
        }
    }
    return ar;
}

console.log(selectionSort([4,54,2,6,7,12]))
