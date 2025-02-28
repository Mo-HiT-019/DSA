class queee {
    constructor(){         
        this.stack1=[];
        this.stack2=[];
    }

    enqueue(data){
        this.stack1.push(data)
    }

    dequeue(){
        if(this.stack2.length==0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }  
        }
        this.stack2.pop()
        
    }
}