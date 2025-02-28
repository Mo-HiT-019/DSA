class Node{
    constructor(data){
        this.data= data;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }

    insert(value){
        const newnode = new Node(value);
        if(!this.root){
            this.root=newnode
        }else{
            this.insertNode(this.root,newnode)    
        }
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(!root.left){
                root.left=newNode;
            }else{
                this.insertNode(root.left,newNode);
            }
        }else{
            if(!root.right){
                root.right=newNode;
            }else{
                this.insertNode(root.right,newNode);
            }
        }
    }

    search(root,value){
        if(!root){
            return false;
        }else{
            if(value==root.value){
                return true;
            }else if(value<root.value){
                this.search(root.left,value);
            }else{
                this.search(root.right,value);
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);            
        }
    }

    bfs(){
        const queue=[];
        queue.push(this.root);
        while(queue.length){
            currentNode=queue.pop();
            console.log(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left)
        }
    }

    remove(value){
        this.root=this.removeNode(this.root,value);
    }

    removeNode(root,value){
        if(!root){
            return root;
        }

        if(root.value>value){
            root.left=this.removeNode(root.left,value);
        }else if(root.value<value){
            root.right=this.removeNode(root.right,value);
        }else{
            if(!root.left && !root.right){
                return null;
            }

            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }

            else{
                root.value=this.min(root.right);
                root.right=this.removeNode(root.right,root.value);
            }
        }
        return root;
    }
}