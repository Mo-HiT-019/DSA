class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class binary{
    constructor(){
        this.root=null;
    }

    insert(value){
        const newNode=new Node(value);

        if(this.root==null){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(root,newNode){
        let queue=[root];
        while(queue.length){
            let currentNode = queue.shift();

            if(!currentNode.left){
                currentNode.left=newNode;
                break;
            }else{
                queue.push(currentNode.left);
            }

            if(!currentNode.right){
                currentNode.right=newNode;
                break;
            }else{
                queue.push(currentNode.right);
            }
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right)
        }
    }

    height(node){
        if(!node){
           return -1; 
        }
        return Math.max(this.height(node.left),this.height(node.right))+1;
    }

    isBalanced(root){
        if(!root){
            return true;
        }

        let leftHeight = this.height(root.left);
        let rightHeight= this.height(root.right);

        let currentBalanced = Math.abs(leftHeight-rightHeight)<=1;

        return(
            currentBalanced&& this.isBalanced(root.left) && this.isBalanced(root.right)
        )
    }
}


const bt = new binary();

bt.insert(5);
bt.insert(6);
bt.insert(57);
bt.insert(12);
bt.insert(4);

bt.inorder(bt.root)

console.log(bt.isBalanced(bt.root));