class Minheap{
    constructor(){
        this.heap=[];
    }

    getParentIndex(index){
        return Math.floor((index-1)/2);
    }

    getLeftChildIndex(index){
        return 2*index+1;
    }

    getRightChildIndex(index){
        return 2*index+2;
    }

    hasParent(index){
        return this.getParentIndex(index)>=0;
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index)<this.heap.length;
    }

    hasRightChild(index){
        return this.getRightChildIndex(index)<this.heap.length;
    }

    parent(index){
        return this.heap[this.getParentIndex(index)];
    }

    leftChild(index){
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index){
        return this.heap[this.getRightChildIndex(index)];
    }

    swap(indexOne, indexTwo){
        const temp = this.heap[indexOne];
        this.heap[indexOne]=this.heap[indexTwo];
        this.heap[indexTwo]=temp;
    }

    peek(){
        if(this.heap.length === 0){
            return "Heap is empty"
        }

        return this.heap[0];
    }

    poll(){
        if(this.heap.length===0){
            return "Heap is empty";
        }

        let item=this.heap[0];
        this.heap[0]=this.heap[this.heap.lenght-1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    add(item){
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp(){
        let index=this.heap.length-1;
        while(this.hasParent(index) && this.parent(index) > this.heap[index]){
            this.swap(this.getParentIndex(index),index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown(){
        let index = 0;
        while(this.hasLeftChild(index)){
            let smallerChildIndex=this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.rightChild(index)<this.leftChild(index)){
                smallerChildIndex=this.getRightChild(index);
            }

            if(this.heap[index]<this.heap[smallerChildIndex]){
                break;
            }else{
                this.swap(index,smallerChildIndex);
            }

            index=smallerChildIndex;
        }
    }
}


function height(node){
    if(node===null){
        return -1;
    }
    return Math.max(height(node.left),height(node.right)) +1;
}

function isBalanced(root){
    if(root==null){
        return true;
    }

    const leftHeight=height(root.left);
    const rightHeight=height(root.right);

    const isCurrentBalanced= Math.abs(leftHeight-rightHeight)<=1;

    return(
        isCurrentBalanced&& isBalanced(root.left) && isBalanced(root.right)
    );
}



const heap = new Minheap();

heap.add(5);
heap.add(23);
heap.add(21);
heap.add(3);
heap.add(18);


console.log(heap.peek());

console.log(heap);