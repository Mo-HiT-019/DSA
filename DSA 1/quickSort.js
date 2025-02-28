const quickSort = function (arr){

    if(arr.length<=1){
        return arr;
    }
    let pivot=arr[0];
    let left=[];
    let right=[];

    for(let i=1;i<arr.length;i++){

        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }

    return[...quickSort(left),pivot,...quickSort(right)];
}

let ar=[1,7,4,6,8,2,9,5];

console.log(quickSort(ar))




