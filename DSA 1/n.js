

function push(value){
    const newNode=new Node(value);

    if(!stack.head){
        stack.head=newNode;
        return;
    }

    newNode.next=stack.head;
    stack.head=newNode;
}

function pop(){
    if(!stack.head){
        console.log("Empty");
        return;
    }

    stack.head=stack.head.next;
}