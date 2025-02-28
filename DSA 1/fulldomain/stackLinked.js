class node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class stack{
    constructor(){
        this.top=null;
    }

    isEmpty(){
        return this.top==null;
    }

    push(data){
        const newnode=new node(data);
        if(this.isEmpty()){
            this.top=newnode;
            return;
        }

        newnode.next=this.top;
        this.top=newnode;
    }

    pop(){
        if(this.isEmpty){
            console.log("empty");
            return;
        }

        this.top=this.top.next;
    }
}