class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Linked{
    constructor(){
        this.head=null;
    }

    addFirst(data){
        let newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
    }

    addLast(data){
        const newNode=new Node(data);

        if(!this.head){
            this.head=newNode;
            return;
        }

        let current=this.head;
        while(current.next){
            current=current.next;
        }

        current.next=newNode;
    }

    size(){
        let count=0;
        let current=this.head;

        while(current){
            count++;
            current=current.next;
        }

        return count;
    }

    addAt(data,index){

        if(index<0 || index>this.size()){
            console.log("Invalid Index");
            return;
        }

        const newNode=new Node(data);

        if(index==0){
            newNode.next=this.head;
            this.head=newNode;
            return;
        }

        let currentNode=this.head;

        for(let i=0;i<index-1;i++){
            currentNode=currentNode.next;
        }
        newNode.next=currentNode.next;
        currentNode.next=newNode;
        
    }

    removeTop(){
        if(!this.head){

            return;
        }
        this.head=this.head.next;
    }

    removeLast(){
        if(!this.head){
            return;
        }
        let current=this.head;

        while(current.next.next){
            current=current.next;
        }
        current.next=null;
    }

    removeAt(index){
        if(index<0 || index>this.size()){
            console.log("invalid index");
            return;
        }

        if(index==0){
            this.head=this.head.next;
        }

        let current=this.head;

        for(let i=0;i<index-1;i++){
            current=current.next;
        }if(current.next){
            current.next=current.next.next;
            return;
        }
        
    }

    printList(){
        if(!this.head){
            console.log("List is empty");
            return;
        }
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}

const rev=(head)=>{
    let prev=null;
    let current=head;

    while(current){
        let nextNode=current.next;
        current.next=prev;
        prev=current;
        current=nextNode;
    }
    head=prev;
    return head;
}

let linew  = new Linked()
linew.addFirst(4)
linew.addFirst(2)
linew.addFirst(3)
linew.addFirst(5);
linew.addLast(8);
linew.addAt(1,2)
linew.removeTop()
linew.removeLast()
linew.removeAt(2)
linew.head=rev(linew.head)

linew.printList()

