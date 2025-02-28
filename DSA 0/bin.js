function binarySearch(arr,target,start,end){
    
    while(start<=end){
        let middle=Math.floor((start+end)/2);

        if(arr[middle]==target){
            return middle;
        }

        else if(arr[middle]>target){

            end=middle;
            return binarySearch(arr,target,start,end)

        }
        else{
            start = middle;
            return binarySearch(arr,target,start,end)
        }

    }
}

let ar=[1,2,3,4,5,6,7,8,9];
let index=binarySearch(ar,4,0,ar.length);
console.log(index);