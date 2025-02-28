class Heap{
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

    hasLeft(index){
        return this.getLeftIndex(index)< this.heap.length;
    }

    hasRight(index){
        return this.getRightIndex(index)<this.heap.length;
    }

    getParent(index){
        return this.heap[this.getParentIndex(index)];
    }

    getLeft(index){
        return this.heap[this.getLeftIndex(index)];
    }

    getRight(index){
        return this.heap[this.getRightIndex(index)];
    }

    swap(indexOne,indexTwo){
        let temp=this.heap[indexOne];
        this.heap[indexOne]=this.heap[indexTwo];
        this.heap[indexTwo]=temp;
    }

    heapifyUp(){

        let index=this.heap.length-1
        while(this.hasParent(index) && this.getParent(index)<this.heap[index]){
            this.swap(this.getParentIndex(index),index);
            index=this.getParentIndex(index);
        }

    }

    heapifyDown(){

        let index=0;
        while(this.hasLeft(index)){
            let largerChildIndex = this.getLeftIndex(index);
            if(this.hasRight(index) && this.getLeft(index) < this.getRight(index)){
                largerChildIndex=this.getRightIndex(index);
            }

            if(this.heap[index]>this.heap[largerChildIndex]){
                break;
            }else{
                this.swap(index,largerChildIndex);
            }

            index=largerChildIndex;
        }

    }

    pull(){

        if(this.heap.length===0){
            return "Heap is empty";
        }

        let item=this.heap[0];
        this.heap[0]=this.heap[this.heap.length-1];
        this.heap.pop();
        this.heapifyDown();


        console.log(`${item} has been removed`);

        return item;


    }

    add(item){
        this.heap.push(item);
        this.heapifyUp();
    }

    peek(){
        if(!this.heap.length){
            return "Empty";
        }else{
            return this.heap[0];
        }
    }


}

function heapsort(ar){
    let maxx = new Heap();

    for(let item of ar){
        maxx.add(item);
    }

    for(let i=ar.length-1;i>=0;i--){
        ar[i]=maxx.pull();
    }
}

const hee = new Heap();
 let arary=[64,6,3,44,62,34,23];
 heapsort(arary);

 console.log(arary)