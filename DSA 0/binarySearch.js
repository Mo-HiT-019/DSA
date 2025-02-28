const binarySearch = (nums,target)=>{

    var start=0;
    var end=nums.length-1;

    while(start<=end){
        let middle=Math.floor((start+end)/2);

        if(nums[middle]===target){
            return middle;
        }
        else if(nums[middle]<target){
            start=middle+1;
        }
        else{
            end = middle-1;
        }
    }

    return -1;
}


console.log(binarySearch([1,3,5,7,8,9],3))