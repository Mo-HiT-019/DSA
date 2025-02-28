//______________BuBBle SOrt_________________

function bubbleSort(ar){

    for(let i=0;i<ar.length;i++){
        for(let j=0;j<ar.length-i-1;j++){
            if(ar[j]>ar[j+1]){
                [ar[j],ar[j+1]]=[ar[j+1],ar[j]];
            }
        }
    }

    return ar;
}






//_____________SelectionSort_______________

function selectionSort(ar){
    for(let i=0;i<ar.length;i++){
        let minIndex = i;
        for(let j=i+1;j<ar.length;j++){

            if(ar[j]<ar[minIndex]){
                minIndex=j;
            }
        }

        if(minIndex!=i){
            [ar[minIndex],ar[i]]=[ar[i],ar[minIndex]];
        }
    }

    return ar;
}






//_____________Insertion SOrt___________________

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
    return ar;
}






//_____________Quick SOrt_______________________

function quickSort(ar){
    if(ar.length<=1){
        return ar;
    }

    let pivot=ar[0];
    let left=[];
    let right=[];

    for(let i=1;i<ar.length;i++){
        if(ar[i]>pivot){
            right.push(ar[i]);
        }else{
            left.push(ar[i]);
        }
    }

    return  [...quickSort(left),pivot,...quickSort(right)];
}







//___________Merge SOrt______________________

function mergeSort(ar){

    if(ar.length<=1){
        return ar ;
    }

    let mid=Math.floor((ar.length/2));
    let left = mergeSort(ar.slice(0,mid));
    let right = mergeSort(ar.slice(mid));

    return merge(left,right);
}

function merge(left,right){
    let sortedArray=[];

    while(left.length && right.length){
        if(left[0]>right[0]){
            sortedArray.push(right.shift());
        }else{
            sortedArray.push(left.shift());
        }
    }

    return [...sortedArray,...left,...right] 
}

console.log(mergeSort([6,3,5,7,1,8,0]));