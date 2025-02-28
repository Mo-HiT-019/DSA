class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null
    }
}

class DLinkedList{
    constructor(){
        this.head=null;
    }

    addFirst(data){
       const newNode= new Node(data)
       newNode.next=this.head;

       if(this.head){
        this.head.prev=newNode;
       }
       this.head=newNode;

    }

    addLast(data){
        const newNode = new Node(data);

        if(!this.head){
            newNode=this.head;
            return;
        }
        let current=this.head;

        while(current.next){
            current=current.next;
        }

        current.next=newNode;
        newNode.prev=current;
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

    addAt(index,data){
        if(index<0||index>this.size()){
            console.log("Invalid Index")
        }

        const newNode = new Node(data);
        if(index===0){
            newNode.next=this.head;
            if(this.head){
                this.head.prev=newNode;
            }
            this.head=newNode;
        }
        let current = this.head;

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

    removeTop(){
        if(!this.head){
            console.log("List is empty");
            return;
        }
        this.head=this.head.next;

        if(this.head){
            this.head.prev=null;
        }

    }

    removeLast(){
        if(!this.head){
            console.log("List is empty");
            return;
        }

        if(!this.head.next){
            this.head=null;
            return;
        }
        let current=this.head;
        while(current.next.next){
            current=current.next;
        }
        current.next=null;  
    }

    removeAt(index){
        if(index<0||index>this.size()){
            console.log("Invalid Index")
        }

        
        if(index===0){
           this.head = this.head.next;

           if(this.head){
            this.head.prev=null
           }
        }
        let current = this.head;

        for(let i=0;i<index-1;i++){
            current=current.next;
        }

        if(current.next){
            current.next= current.next.next;

            if(current.next){
                current.next.prev=current;
            }
        }

    }
    pritn(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }

}

const dlist = new DLinkedList()

dlist.addFirst(2);
dlist.addFirst(4);
dlist.addFirst(7);

dlist.addLast(9);
dlist.addLast(1);
dlist.addLast(3);

//dlist.addAt(1,6);

//dlist.removeTop()

//dlist.removeLast();

dlist.removeAt(2)

dlist.pritn();

