var Mystack = function(){
    this.q1=[];
    this.q2=[];
}

Mystack.prototype.push=function(x){
    while(this.q1.length!==0){
        this.q2.push(this.q1.shift())
    }
    this.q1.push(x);
    while(this.q2.length!==0){
        this.q1.push(this.q2.shift());
    }
}

Mystack.prototype.pop = function(){
    return this.q1.shift();
}

Mystack.prototype.top = function(){
    return this.q1[0];
}

Mystack.prototype.empty=function(){
    return this.q1.length === 0;
}
