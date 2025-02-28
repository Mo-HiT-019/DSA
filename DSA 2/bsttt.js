class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}


class Bst{
    constructor(){
        this.root=null;
    }

    insert (value){
        const newNode=new Node(value);
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

    inorder(root,ar=[]){
        if(root){
            this.inorder(root.left,ar);
            ar.push(root.value);
            this.inorder(root.right);
        }
        return ar;
    }
}

const bt=new Bst();

bt.insert(5);
bt.insert(2);
bt.insert(6);
bt.insert(1);
bt.insert(9);

function secondLargest(bt){
    let arr=bt.inorder(arr)
}

bt.inorder(bt.root)
