var sumar=function(ar,t){
    for(let i=0;i<ar.length;i++){
        for(let j=i+1;j<ar.length;j++){
            if(ar[i]+ar[j]==t){            //Time Complexity O(n^2) Sp O(1)
                return [ar[i],ar[j]];
            }
        }
    }
}


var sumar2 = function(ar,t){
    let s=new Set();

    for(let i=0;i<ar.length;i++){
        let val=t-ar[i];
        if(s.has(val)){
            return [val,ar[i]];          //Ts O(n) Space O(n)
        }
        else{
            s.add(ar[i]);
        }

    }

}

var arr=[6,5,4,3,2,1]
var t=10;
let result=sumar(arr,t);
let result2=sumar2(arr,t);
console.log(result2);


