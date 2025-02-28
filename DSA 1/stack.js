class Stack{
    constructor(){
        this.stack=[]
    }

    push(element){
        this.stack.push(element);
    }

    pop(){
        if(this.isEmpty()){
            return "Stack is Empty";
        }else{
            return this.stack.pop();
        }
    }
    isEmpty(){
        return this.stack.length ===0;
    }

    size(){
        return this.stack.length;
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        else{
            return this.stack[this.size()-1];
        }
    }
    printStack(){
        if(this.isEmpty()){
            return "Stack is empty";
        }

        for(let i=this.size()-1;i>=0;i--){
             console.log(this.stack[i])
        }
    }
}

function sortStack(st){
 
    let sorted=[];

    while(st.size()!==0){
        sorted.push(stack.pop());
    }
    for(let i=0;i<sorted.length;i++){
        for(let j=0;j<sorted.length-1-i;j++){
            if(sorted[j]>sorted[j+1]){
                [sorted[j],sorted[j+1]]=[sorted[j+1],sorted[j]];
            }
        }
    }
    while(sorted.length!==0){
        st.push(sorted.pop())
    }
    

}

function reverseStack(st){
    const stack2= new Stack();
    while(st.size()!==0){
        stack2.push(st.pop());
    }

     return stack2;
}



const stack= new Stack();

//console.log(stack.peek())
stack.push(10);
stack.push(5);
stack.push(7);
stack.push(4);
stack.push(1);

//console.log(stack.peek())

//sortStack(stack);
reverseStack(stack);



stack.printStack();
