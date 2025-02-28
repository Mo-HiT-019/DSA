//Truncate

function truncate(str,maxlength){

    if(str.length>maxlength){
        return str.slice(0,maxlength)+"...";
        
    }
    else{
        return str;
    }

}
let st="Hai am Mohit"

//console.log(truncate(st,2))

//Hamming length

function hamming(str1,str2){
    if (str1.length!==str2.length){
        return console.log("Not same length")
    }
    else{
        let distance=0
        for(let i=0;i<str1.length;i++){
            if(str1[i]!==str2[i]){
                distance++;
            }
        }
        return distance;
    }
}

//console.log(hamming("haai","haae"));

//Anagram;

function anagram(a,b){
    a=a.split("").sort().join();
    b=b.split("").sort().join();

    return a == b;
}

