//BUbble Sort

const bubbleSort=(ar)=>{
    for(let i=0;i<ar.length;i++){
        for(let j=0;j<ar.length-1-i;j++){
            if(ar[j]>ar[j+1]){
                [ar[j],ar[j+1]]=[ar[j+1],ar[j]];
            }
        }
    }
    return ar;
}


//console.log(bubbleSort([3,6,1,2,3,4]))

//insertionSOrt


const insertionSort=(ar)=>{
    for(let i=1;i<ar.length;i++){
        let key=ar[i];
        let j=i-1;
        while(j>=0 && ar[j]>key){
                ar[j+1]=ar[j];
                j--;
        }

        ar[j+1]=key;
        
    }
    return ar
}

//console.log(insertionSort([6,3,7,1,3,5]))

const selectionSort=(ar)=>{
    for(let i=0;i<ar.length-1;i++){
        let minIndex=i;
        for(let j=i+1;j<ar.length;j++){
            if(ar[j]<ar[minIndex]){
                minIndex=j;
            }
        }

        if(minIndex!==i){
            [ar[i],ar[minIndex]]=[ar[minIndex],ar[i]];
        }
    }
    return ar;
}

//console.log(selectionSort([5,2,6,8,1,23]))




//                  QUICK SORT


const quickSort=(ar)=>{

    if(ar.length<=1){
        return ar;
    }
    let pivot=ar[0];
    let left=[];
    let right=[];
    for(let i=1;i<ar.length;i++){
        if(ar[i]<pivot){
            left.push(ar[i]);
        }else{
            right.push(ar[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

//console.log(quickSort([7,4,32,8,2,1]))




//>>>>>>>>>>>>>>>>>>>> MERGE SORT <<<<<<<<<<<<<<<<<<<<<<<


function mergeSort (ar){

    if(ar.length<=1){
        return ar;
    }
    let mid=Math.floor(ar.length/2);

    let left=mergeSort(ar.slice(0,mid));
    let right=mergeSort(ar.slice(mid));

    return merge(left,right);
    
}

function merge(left,right){
    let sortedArray=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            sortedArray.push(left.shift());
        }else{
            sortedArray.push(right.shift());
        }
    }

    return [sortedArray,...left,...right]


}

console.log(mergeSort([7,2,5,8,1,65,3]))


