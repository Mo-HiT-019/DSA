const insSort=(ar)=>{

    for(let i=1;i<ar.length;i++){
        let key=ar[i];
        let j=i-1;
        while(j>=0 && ar[j]>key){
            ar[j+1]=ar[j];
            j--;
        }

        ar[j+1]=key;
    }

    return ar;
}

console.log(insSort([2,5,1,34,6,3]));