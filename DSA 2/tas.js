
class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }


}
class BST{
    constructor(){
        this.root=null;
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(root,value){

        
        if(value<root.value){
            root.left=this.insertNode(root.left,value);
        }
    }
}

