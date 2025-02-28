class Node{
    constructor(value){
        this.left=null;
        this.right=null;
        this.value=value;
    }
}

class binarySearchTree{
    constructor(){
        this.root=null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.root==null){
            this.root=newNode;
            return this;
        }

        let current=this.root;
        while(true){
            if(current.value === value) return undefined;

            if(value<current.value){
                if(current.left ==null){
                    current.left = newNode;
                    return this
                }
                current=current.left;
            }else{
                if(current.right==null){
                    current.right=newNode;
                    return this;
                }
                current=current.right;
            }
        }
    }

    contain(value){
        if(!this.root)return false;

        let current=this.root
        while(current){
            if(value<current.value){
                current=current.left;
            }else if(value>current.value){
                current=current.right;
            }else{
                return true;
            }
        }
        return false;
    }

    remove(value){
        this.root=this.removeNode(this.root,value);
    }

    removeNode(node,value){

        if(!node){
            return null;
        }

        if(value<node.value){
            node.left=this.removeNode(node.left,value);
            return node;
        }
        else if(node.value<value){
            node.right=this.removeNode(node.right,value);
            return node;
        }else{

            if(node.left===null && node.right===null){
                return null;
            }

            if(node.left==null){
                return node.right;
            }else if(node.right==null){
                return node.left;
            }

            let tempNode= this.getMin(node.right);
            node.value=tempNode.value;
            node.right=this.removeNode(node.right,tempNode.value);
            return  node;
        }
    }

    getMin(node){
        while(node.left!==null){
            node=node.left;
        }
        return node;
    }
}





let bst = new binarySearchTree();
bst.insert(12);
bst.insert(10);
bst.insert(15);
bst.insert(13);
bst.insert(11);

bst.remove(12);




console.log(bst);