const binary=(ar,target)=>{
    let start=0;
    let end=ar.length-1;
    while(start<end){

        let mid=Math.floor((start+end)/2);
        if(ar[mid]==target){
            return mid;
        }

        if(ar[mid]>target){
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    return -1;
    
}


console.log(binary([1,2,4,5,6,8],6))