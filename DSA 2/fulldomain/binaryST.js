class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }
}

class Bst{
    constructor(){
        this.root=null;
    }

    isEmpty(){
        return this.root===null;
    }

    insert(value){
        let newNode=new Node(value)

        if(this.isEmpty()){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        let currentNode=root;

        if(newNode.value<currentNode.value){
            if(!currentNode.left){
                currentNode.left=newNode;
                
            }else{
                this.insertNode(currentNode,newNode)
            }
        }else{
            if(!currentNode.right){
                currentNode.right=newNode;
                
            }else{
                this.insertNode(currentNode,newNode)
            }
        }
    }

    search(root,value){

        if(!root) return root;

        let current=root

        if(current.value==value){
            return true;
        }else if(current.value<value){
            return this.search(current.right,value);
        }else{
            return this.search()
        }
    }

    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right)
        }
    }

    delete(value){
        this.root=this.deletenode(this.root,value)
    }

    min(root){
        if(!root.left){
            return root.value;
        }else{
            this.min
        }
    }

    deletenode(root,value){
        if(!root){
            return root;
        }

        if(value<root.value){
            root.left=this.deletenode(root.left,value)
        }else if(value>root.value){
            root.right=this.deletenode(root.right,value);
        }else{
            if(!root.left && !root.right){
                return null;
            }else if(!root.right){
                return root.left;
            }else if(!root.right){
                return root.left;
            }else{
                root.value=this.min(root.right);
                root.right=root.deletenode(root.right)
            }
        }

        return root
    }
}