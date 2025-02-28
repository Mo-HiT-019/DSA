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

        const newNode= new Node(data);

        if(!this.front){
            this.front=newNode;
            this.rear=newNode;
            return;
        }

        this.rear.next=newNode;
        this.rear=newNode;

    }

    dequeue(){
        if(!this.front){
            console.log("The queuue is empty");
            return;
       
        }

        this.front = this.front.next;

        if(!this.front){
            this.rear = null;
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

const q = new Queue()

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

q.dequeue();

q.display();