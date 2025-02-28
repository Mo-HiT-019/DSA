

function reverse(str){

      let charMap={};
      let result="";

      for(let char of str){
        if(!charMap[char]){
            charMap[char]=true;
            result += char;
        }
      }

      return result;

}

let str="Banana";

console.log(reverse(str));

let chaar={};

chaar[1]="hai";
chaar[0]=1;
chaar["n"]=3;
chaar["m"]=3;



//console.log(chaar)



