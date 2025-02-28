class node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

class doublyLinked{
    constructor(){
        this.head=null;
    }

    addFirst(data){
        const newNode=new node(data);

        if(!this.head){
            this.head=newNode;
            return;
        }

        newNode.next=this.head;
        this.head.prev=newNode;
        this.head=newNode;
        return;
    }

    addLast(data){
        const newNode=new node(data);

        if(!this.head){
            this.head=newNode;
            return;
        }

        let current=this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
        newNode.prev=current;
        return;

    }

    size(){
        let count=0;
        let current=this.head

        while(current){
            current=current.next;
            count++;
        }
        return count;
    }

    addAt(data,index){
        
        const newNode=new node(data);

        if(index<0||index>this.size()){
            console.log("Invalid Index")
            return;
        }

        if(index==0){
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode;
            return;
        }
        
        let current=this.head
        for(let i=0;i<index-1;i++){
            current=current.next;
        }
        newNode.next=current.next;
        newNode.prev=current;
        if(current.next){
            current.next.prev=newNode;
        }
        current.next=newNode;

    }

    removetop(){
        if(!this.head){
            return;
        }

        this.head=this.head.next;
        if(this.head){
            this.head.prev=null;
        }
        return;
    }

    removeLast(){
        if(!this.head){
            return;
        }

        let current=this.head;

        while(current.next.next){
            current=current.next;
        }
        current.next.prev=null;
        current.next=null;
    }

    removeAt(index){
        if(index<0||index>this.size()){
            console.log("Invalid Index")
            return;
        }

        if(index==0){
            this.head=this.head.next;
            this.head.prev=null
            return;

        }

        let currentNode=this.head;

        for(let i=0;i<index-1;i++){
            currentNode=currentNode.next;
        }
        currentNode.next=currentNode.next.next;
        currentNode.next.prev=currentNode;
    }

    pritn(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}


const dlist = new doublyLinked()

dlist.addFirst(2);
dlist.addFirst(4);
dlist.addFirst(7);

dlist.addLast(9);
dlist.addLast(1);
dlist.addLast(3);

dlist.addAt(99,1);
dlist.removetop()
dlist.removeLast()
dlist.removeAt(2)

dlist.pritn()