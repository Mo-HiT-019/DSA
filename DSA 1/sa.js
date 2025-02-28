class Node {
    constructor(data){
        this.data=data;
        this.next=null;

    }
    
}

class Stack {
    constructor(){
        this.top=null
    }


    push(data){

        const newNode = new Node(data)
        if(this.top === null){
            this.top=newNode;
            return;
        }

        newNode.next=this.top;
        this.top = newNode;



    }

    display(){
        let current=this.top;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
    
}


const st = new Stack()

st.push(4);
st.push(1);
st.push(47);
st.push(5);

st.display();