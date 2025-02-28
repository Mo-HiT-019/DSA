var swap=function(ar,t){
    let i=0;
    let j=ar.length-1;
    while(i!==j){
        if(ar[j]==t){
            j--;
        }
        else if(ar[i]==t){
            let temp=ar[i];
            ar[i]=ar[j];
            ar[j]=temp;             
            i++;
            j--;
        }
        else if(ar[i]!==t){
            i++;
        }
    }

     return ar;
}

let ar=[6,4,6,2,7,8,5,6,4,6]
let result=swap(ar,6)
console.log(result);                    // Tc=O(n) Sp=O(1)