var findRelativeRanks = function(score) {
    let result=["Gold Medal","Silver Medal","Bronze Medal","4","5"];
    let scoreCopy=[...score];
    let sorted=score.sort((a,b)=>b-a)
    console.log(sorted);
    console.log(scoreCopy)
    while(result.length){
        let curr=sorted.shift();
        console.log(curr);
        for(let i=0;i<scoreCopy.length;i++){
            if(curr===scoreCopy[i]){
                scoreCopy[i]=result.shift();
            }      
        }
    }
    return scoreCopy;
    }
    


console.log(findRelativeRanks([19,2,5,20,8]));