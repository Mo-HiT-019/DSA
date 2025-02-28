const quickSort=(ar)=>{
    if(ar.length<=1){
        return ar;
    }
    let left=[]
    let right=[];
    let pivot=ar[0];

    for(let i=1;i<ar.length;i++){
         
        if(ar[i]<pivot){
            left.push(ar[i]);
        }else{
            right.push(ar[i])
        }
        
    }
    return([...quickSort(left),pivot,...quickSort(right)]);
}

console.log(quickSort([3,6,22,1,5,66]))