

function multiply(arr){

    console.log(arr)


    if(arr.length<=0){
        return 1;
    }
    else{
    return arr[arr.length-1] * multiply(arr.slice(0,arr.length-1))
    }
}

//console.log(multiply([1,2,3,4]))


//Factorial

function factorial(n){
    console.log(n);
    if(n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}

//console.log(factorial(5))


function rangeOfArray(start,end){
    
    if(start>end){
        return [];
    }else{
        const res=rangeOfArray(start,end-1);
        console.log(end)
        res.push(end);
        return res;
    }
}

//console.log(rangeOfArray(0,5))

function checkPalindrome(str,left,right){

    if(left>right){
        return true;
    }

    if(str[left]!==str[right]){
        return false;
    }
    return checkPalindrome(str,left+1,right-1);
}

let str="120121";
//console.log(checkPalindrome(str,0,str.length-1))

function fibb(n){
    if(n<=1){
        return n;
    }

    return fibb(n-1)+fibb(n-2);
}

//console.log(fibb(6))

function reverseString(str){

    if(str==""){
        return "";
    }else{
        return reverseString(str.substr(1))+str.charAt(0);
    }
}

//console.log(reverseString("Hello"));

function subsett(nums){
    let result=[];
    let temp =[];

    function recSub(nums,i){
        if(i==nums.length){
           return result.push([...temp]);
        }

        temp.push(nums[i]);
        recSub(nums,i+1);
        temp.pop();
        recSub(nums,i+1);
    }
    recSub(nums,0);
    return result;
}

console.log(subsett([1,2,3]))