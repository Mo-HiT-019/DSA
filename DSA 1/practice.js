class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
    }

    enqueue(data){
        const newNode = new Node(data);

        if(!this.front){
            this.front=newNode;
            this.rear=newNode;
            return;
        }

        this.rear.next=newNode
        this.rear=newNode;
    }

    dequeue(){
        if(!this.front){
            return "Empty";
        }

        this.front=this.front.next;

        if(!this.front){
            this.rear=null;
        }

    }

    display(){
        if(!this.front){
            console.log("The queuue is empty");
            return;
        }
        let current=this.front;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}

class Que{
    constructor(){
        this.que=[];
    }

    enq(data){
        this.que.push(data);
    }

    dq(){
        this.que.shift();
    }
}

let q=new Queue();

q.enqueue(3);
q.enqueue(6);
q.enqueue(1);

q.dequeue()
q.display()
