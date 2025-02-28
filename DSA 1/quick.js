const quickSort=(ar)=>{

    if(ar.length<=1){
        return ar;
    }

    let pivot= ar[0];
    let left = []
    let right = [];

    for(let i=1;i<ar.length;i++){
        if(pivot>ar[i]){
            left.push(ar[i]);
        }else{
            right.push(ar[i])
        }
    }

    return [...quickSort(left),pivot,...quickSort(right)];


}


let ar=[7,3,6,9,2,1];

console.log(quickSort(ar));