class Node{
    constructor(data){
        this.value=data;
        this.left=null;
        this.right=null;
    }
}

class Bst{
    constructor(){
        this.root=null;
    }

    insert(value){
        const newNode= new Node(value);
        if(!this.root){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(!root.left){
                root.left=newNode;
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(!root.right){
                root.right=newNode;
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    bfs(){
        let queue=[];
        queue.push(this.root);
        while(queue.length){
            let currentVertex = queue.shift();
            console.log(currentVertex.value);
            if(currentVertex.left){
                queue.push(currentVertex.left);  
            }

            if(currentVertex.right){
                queue.push(currentVertex.right);
            }
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    min(root){
        if(!root.left){
            return root.value;
        }else{
            this.min(root.left);
        }
    }

    remove(value){
        this.root=this.removeNode(this.root,value);
    }

    removeNode(root,value){
        if(!root){
            return root
        }      

        if(value<root.value){
            this.removeNode(root.left,value);
        }else if(value>root.value){
            this.removeNode(root.right,value);
        }else{
            if(!root.left && !root.right){
                return null;
            }
            else if(!root.left){
                return root.right;
            }

            else if(!root.right){
                return root.left;
            }else{
                root.value=this.min(root.right);
                root.right=this.removeNode(root.right,root.value);
            }


        }

        return root;
    }
}

function height(node){
    if(!node){
        return -1;
    }

    return Math.max(height(node.left),height(node.right))+1;
}

function isBalanced(node){

    if(!node){
        return true;
    }

    let leftHeight = height(node.left);
    let rightHeight = height(node.right);
    let currentBalanced = Math.abs(leftHeight-rightHeight) <=1;

    return (currentBalanced && isBalanced(node.left) && isBalanced(node.right))

}

const bt = new Bst();
bt.insert(4);
bt.insert(3);
bt.insert(8);
bt.insert(1);
bt.insert(9);

bt.bfs();

console.log(isBalanced(bt.root))

//bt.inorder(bt.root);

//console.log(bt.search(bt.root,42));


//bt.remove(4);

//bt.inOrder(bt.root);




