class MinHeap{
    constructor(){
        this.heap=[];
    }

    getParentIndex(index){
        return Math.floor((index-1)/2);
    }

    getLeftIndex(index){
        return 2*index+1;
    }

    getRightIndex(index){
        return 2*index+2;
    }

    hasParent(index){
        return this.getParentIndex(index)>=0;
    }

    hasLeftChild(index){
        return this.getLeftIndex(index)<this.heap.length;
    }

    hasRightChild(index){
        return this.getRightIndex(index)<this.heap.length;
    }

    parentValue(index){
        return this.heap[this.getParentIndex(index)];
    }

    leftValue(index){
        return this.heap[this.getLeftIndex(index)];
    }

    rightValue(index){
        return this.heap[this.getRightIndex(index)];
    }

    swap(indexone,indextwo){
        let temp=this.leftValue(indexone);
        this.heap[indextwo]=this.heap[indexone];
        this.heap[indexone]=temp;
    }

    pull(){
        if(this.heap.length===0){
            return "Heap is empty";
        }

        let item=this.heap[0];
        this.heap[0]=this.heap[this.heap.length-1];
        this.heap.pop();
        this.heapifyDown();
        return item;
        
    }

    heapifyDown(){
        let index=0;

        while(this.hasLeftChild(index)){
            let smallerChildIndex=this.getLeftIndex(index);
            if(this.hasRightChild(index) && this.rightValue(index)<this.leftValue(index)){
                smallerChildIndex=this.getRightIndex(index);
            }
            if(this.heap[index]<this.heap[smallerChildIndex]){
                break
            }else{
                this.swap(index,smallerChildIndex);
            }
            index = smallerChildIndex;
        }

    }

    add(item){
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp(){
        let index=this.heap.length-1;
        while(this.hasParent(index) && this.parentValue(index)>this.heap[index]){
            this.swap(index,this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    height(node){
        if(!node){
            return -1;
        }
        return Math.max(this.height(node.left,node.right))+1;
    }

    isBalanced(root){
        if(!root){
            return true;
        }

        const leftHeight = this.height(root.left);
        const rightHeight = this.height(root.right)

        const isBalanced= Math.abs(leftHeight-rightHeight)<=1;

        return (isBalanced && isBalanced(root.left) && isBalanced(root.right))
    }


}