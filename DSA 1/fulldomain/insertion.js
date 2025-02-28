function insort(ar){
    for(let i=1;i<ar.length; i++){
        let key=ar[i];
        let j=i-1
        while(j>=0 && ar[j]>key){
            ar[j+1]=ar[j];
            j--;
        }
        ar[j+1]=key;
    }
    return ar
}

console.log(insort([23,5,66,2,1]))