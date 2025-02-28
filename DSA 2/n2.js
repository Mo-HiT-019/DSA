class MaxHeap{
    constructor(){
        this.heap=[];
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
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

    hasLeft(index){
        return this.getLeftIndex(index)<this.heap.length;
    }

    hasRight(index){
        return this.getRightIndex
        
        (index)<this.heap.length;
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

    add(value){
        this.heap.push(value);
        console.log(this.heap)
        this.heapifyUp();
    }

    heapifyUp(){

        let index = this.heap.length-1;
        while(this.hasParent(index) && this.parentValue(index)<this.heap[index]){
            this.swap(index,this.getParentIndex(index))
            index=this.getParentIndex(index);
        }
    }

    pull(){
        if(this.heap.length===0){
            return "Heap is empty";
        }

        let item =this.heap[0];
        this.heap[0]=this.heap[this.heap.length-1];
        this.heap.pop();
        this.heapifyDown();
        console.log(`${item} Removed`)
        return item;
    }

    swap(indexOne,indexTwo){
        let temp=this.heap[indexOne];
        this.heap[indexOne]=this.heap[indexTwo];
        this.heap[indexTwo]=temp;
    }

    heapifyDown(){
        let index=0;
        while(this.hasLeft(index)){
            let largerChildIndex=this.getLeftIndex(index);
            if(this.hasRight(index) && this.rightValue(index)> this.leftValue(index)){
                largerChildIndex=this.getRightIndex(index);
            }
            
            if(this.heap[largerChildIndex]<this.heap[index]){
                break;
            }else{
                this.swap(index,largerChildIndex);
            }

            index=largerChildIndex;
        }

    }

}

function heapsort(ar){
    const maxx = new MaxHeap()
    for(item of ar){
        maxx.add(item);
    }

    for(let i=ar.length-1;i>=0;i--){
        ar[i]=maxx.pull()
    }

}




let arr=[3, 1, 6, 5, 2, 4];

heapsort(arr);

console.log(arr)
