class Queue{
    constructor(){
        this.queue =[];
    }

    enqueue(element){
        this.queue.push(element);
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue Undeflow";
        }

        return this.queue.shift();
    }

    isEmpty(){
        return this.queue.length===0;
    }

    size(){
        return this.queue.length;
    }

    front(){
        if(this.isEmpty()){
            return "No elements in queue";
        }
        return this.queue[0];
    }

    printQueue(){
        let queueString="";
        for(let i=0;i<this.size();i++){
            queueString+=this.queue[i]+", "
        }
        console.log("Queue : "+queueString);
    }
}

const myQ= new Queue();


myQ.enqueue(4);
myQ.enqueue(2);
myQ.enqueue(8);
myQ.enqueue(62);
myQ.enqueue(9);
myQ.enqueue(23);

myQ.printQueue();

myQ.dequeue();

myQ.printQueue();