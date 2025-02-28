function twoSum(nums,target){
    const hashMap = new Map();

    for(let i=0;i<nums.length;i++){
        let x=target-nums[i];


        if(hashMap.has(x)){

            return[hashMap.get(x),i];
        }

        hashMap.set(nums[i],i);
    }

    return [];
}

let ar=[2,4,6,7,5];

console.log(twoSum(ar,12))