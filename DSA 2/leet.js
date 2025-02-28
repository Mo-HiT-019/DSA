var countWords = function(words1, words2) {
    let result={};
    let result2=0;
    for(let i=0;i<words1.length;i++){
        for(let j=0;j<words2.length;j++){
            if(words1[i]==words2[j]){
                if(!result[words1[i]]){
                    result[words1[i]]=1;
                }else{
                    result[words1[i]]++;
                }

            }
        }
    }
    console.log(result);
    for(let item in result){
        if(result[item]==1){
            result2++;
        }
    }

    return result2;

};



let words1 = ["a","ab"];
let words2 = ["a","a","a","ab"];

console.log(countWords(words1,words2));