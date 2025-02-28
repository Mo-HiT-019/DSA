function freq(str){

    let hash={};
    for(let char of str){
        if(!hash[char]){
            hash[char]=1;
        }
        else{
            hash[char]+=1;
        }

    }

    console.log(hash)
}

st="hitmohit";
freq(st);