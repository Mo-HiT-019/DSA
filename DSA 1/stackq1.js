// Reverse String

const rever=(s)=>{
     let split=s.split(" ");
     const stack=[]

     for(let i of split){
        stack.push(i);
     }

     let final='';
     while(stack.length){
        const current=stack.pop();

        if(current){
            final=final+" "+current;
        }


     }
     return final.trim();
}  

let s="My name is Mohit";
console.log(rever(s));