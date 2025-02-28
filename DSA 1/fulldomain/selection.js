const selection = function(ar){

    for(let i =0;i<ar.length;i++){
        let minIndex =i;

        for(let j=i+1;j<ar.length;j++){
            if(ar[j]<ar[minIndex]){
                minIndex=j;
            }
        }
        if(minIndex!==i){
            [ar[minIndex],ar[i]]=[ar[i],ar[minIndex]];
        }
    }
    return ar;
}

console.log(selection([34,4,22,1,9,2]))