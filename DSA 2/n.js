class MinHeap{

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

    hasLeft(index){
        return this.getLeftChildIndex(index)<this.heap.length;
    }

    hasRight(index){
        return this.getRightChildIndex(index)<this.heap.length;
    }

    parentValue(index){
        return this.heap[this.getParentIndex(index)];
    }

    rightValue(index){
        return this.heap[this.getRightChildIndex(index)];
    }

    leftValue(index){
        return this.heap[this.getLeftChildIndex(index)];
    }

    swap(indexOne,indexTwo){
        let temp = this.heap[indexOne];
        this.heap[indexOne]=this.heap[indexTwo];
        this.heap[indexTwo]=temp;
    }

    add(value){
        this.heap.push(value);
        console.log(this.heap)
        this.heapifyUp()

    }

    heapifyUp(){
        let index=this.heap.length-1;
        while(this.hasParent(index) && this.parentValue(index) > this.heap[index]){
            this.swap(index,this.getParentIndex(index));
            index=this.getParentIndex(index);
        }
    }

    poll(){
        let item=this.heap[0];
        this.heap[0]=this.heap[this.heap.length-1];
        this.heap.pop();
        this.heapifyDown()
        return item;
        
    }

    heapifyDown(){
        let index=0;
        while(this.hasLeft(index)){
            let smallerChildIndex=this.getLeftChildIndex(index);
            if(this.hasRight(index) && this.rightValue(index)<this.leftValue(index)){
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if(this.heap[smallerChildIndex]>this.heap[index]){
                break;
            }else{
                this.swap(smallerChildIndex,index);
            }
            index=smallerChildIndex;
        }
    }



    
}




const minn = new MinHeap();

minn.add(5)
minn.add(8)
minn.add(1)
minn.add(22)
minn.add(3)
minn.add(51)