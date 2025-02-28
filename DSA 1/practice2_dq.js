class Dequeue{

    constructor(){
        this.dq=[];
    }

    addFront(data){
        this.dq.unshift(data);
    }

    addBack(data){
        this.dq.push(data);
    }

    removeFront(){
        this.dq.shift();
    }

    removeBack(){
        this.dq.pop();
    }

    print() {
        console.log(this.dq.toString());
      }
    
}

const deq = new Dequeue();

deq.addFront(4);
deq.addFront(3);
deq.addFront(6);
deq.addBack(2);
deq.removeFront()
deq.removeBack();
deq.print()