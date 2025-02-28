class hashTable{
    constructor(size=10){
        this.table=new Array(size);
        this.size=size;
    }

    _hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(i)
        }

        return hash% this.size;
    }

    set(key,value){
        let index=this._hash(key);
        if(!this.table[index]){
            this.table[index]=[]
        }
        this.table[index].push([key,value])//if exist pushes to next pos
    }

    get(key){
        let index=this._hash(key);

        if(!this.table[index]){
            return undefined
        }

        for(let pair of this.table[index]){
            if(pair[0]==key) return pair[1];
        }

        return undefined;
    }

    remove(key){
        let index= this._hash(key);

        if(!this.table[index]){
            return false;
        }

        this.table[index]=this.table[index].filter((pair)=>{
            return pair[0]!==key
        })

    }

    display(){
        this.table.forEach((values,index)=>{
            if(values){
                console.log(index,values)
            }

        })
    }
}


const hash = new hashTable();
hash.set("name", "Hitman");
hash.set("age", 25);
hash.set("place", "Brocamp");


console.log(hash.get("name"));

hash.display()

hash.remove("name");

hash.display(      )