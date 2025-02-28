

const linearSearch = (nums,target)=>{

    for(let i=0; i<nums.length;i++){
        if(nums[i]==target){
            return i;
        }
    }
    return -1;

}

console.log(linearSearch([1,5,3,6,7,2],3))

console.log(linearSearch([1,5,3,6,7,2],9))



const globalLinearSearch = (nums,target)=>{
    const result=[];
    for(let i=0; i<nums.length;i++){
        if(nums[i]==target){
            result.push(i);
        }
    }
    if(result.length===0){
        return -1;
    }
    else{
        return result;
    }

}


console.log(globalLinearSearch([1,5,3,6,5,7,2,5],5))