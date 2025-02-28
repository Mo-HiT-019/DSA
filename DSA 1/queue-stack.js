var Myqueue=function(){
    this.stack1=[];
    this.stack2=[];
}

Myqueue.prototype.enqueue=function(x){
    this.stack1.push(x);
}

Myqueue.prototype.dequeue=function(){
    if(this.stack2.length === 0){
        while(this.stack1.length>0){
            this.stack2.push(this.stack1.pop())
        }
        this.stack2.pop();
    }
    this.stack2.pop();
}

Myqueue.prototype.front=function(){
    if(this.stack2.length === 0){
        while(this.stack1.length>0){
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2[this.stack2.length-1];
}

Myqueue.prototype.empty = function(){
    return this.stack1.length && this.stack2.length === 0;
}