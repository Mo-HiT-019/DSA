function insertionSort(ar){

    for(let i=1;i<ar.length;i++){
        let key=ar[i];
        let j=i-1;
        while(j>=0 && ar[j]>key){
            ar[j+1]=ar[j];
            j--;
        }

        ar[j+1]=key;
    }
}

let arr=[9,5,6,2,4];

console.log()