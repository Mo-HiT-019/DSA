class Heap{
    constructor(){
        this.heap=[]
    }

    getParentIndex(index){
        return Math.floor((index-1)/2);
    }

    getleftChildIndex(index){
        return 2*index+1
    }

    getRightChildIndex(index){
        return 2*index+2
    }

    hasParent(index){
        return this.getParentIndex(index)>=0
    }

    hasLeft(index){
        return this.getRightChildIndex(index)<this.heap.length
    }

    hasRight(index){
        return this.getRightChildIndex(index)<this.heap.length
    }

    getParent(index){
        return this.heap[this.getParentIndex[index]]
    }

    getLeft(index){
        return this.heap[this.getLeftIndex(index)];
    }

    getRight(index){
        return this.heap[this.getRightIndex(index)];
    }

    swap(indexOne,indexTwo){
        let temp=this.heap[indexOne]
        this.heap[indexOne]=this.heap[indexTwo];
        this.heap[indexTwo]=temp;
    }

    heapifyUp(){
        let index=this.heap.length-1;
        while(this.hasParent(index) && this.getParent(index)>this.heap[index]){
            this.swap(index,this.getParentIndex(index));
            index=this.getParentIndex(index)
        }
    }

    heapifyDown(){
        let index=0;
        while(this.hasLeft(index)){
            let smallerChildIndex=this.getleftChildIndex(index);
            if(this.hasRight(index)&& this.getRight(index)<smallerChildIndex){
                smallerChildIndex=this.getRightChildIndex(index);
            }
            if(this.heap[index]<this.heap[smallerChildIndex]){
                break;
            }else{
                this.swap(index,smallerChildIndex);
                index=smallerChildIndex;
            }

        }
    }

}