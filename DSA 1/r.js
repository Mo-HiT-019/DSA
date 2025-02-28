const remov=(st)=>{

    let ar=st.split("");
    let ar2=[]
    for(let i=0;i<ar.length;i++){

        if(ar2.includes(ar[i])){
            continue;
        }
        else{
            ar2.push(ar[i]);
        }
    }
     return ar2.toString()
}

let nam="Mohittt";
console.log(remov(nam));



 