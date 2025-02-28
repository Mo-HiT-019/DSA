class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        
    }

    push(data){
        const newNode = new Node(data);

        if(this.top === null){

            this.top=newNode;
        }else{

        newNode.next=this.top;
        this.top=newNode;
        }
    }

    pop(){
        if(!this.top){
            console.log("Stack is empty");
        }
        else{
            this.top=this.top.next;
        }
    }

    peek(){
        if(!this.top){
            console.log("Stack is empty");
        }
        else{
            console.log(this.top);
        }
    }

    isEmprty(){
        return stack.top == null;
    }

    display(){
        if(!this.top){
            console.log("Stack is empty");
            return;
        }
        else{
            let current =this.top;
            while(current){
                console.log(current.data);
                current=current.next;
            }
        }
    }
}

const stack=new Stack();

stack.push(1);
stack.push(3);
stack.push(5);
stack.pop()


stack.display();