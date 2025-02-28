class TrieNode{
    constructor(){
        this.children={};
        this.isEnd=false;
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode();
    }

    insert(word){
        let node=this.root;
        for (let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }
            node=node.children[char];
        }
        node.isEnd=true;
    }

    search(word){
        let node=this.root;
        for(let char of word){
            if(!node.children[char]){
                return false;
            }
            node=node.children[char];
        }
        return node.isEnd;
    }

    isPrefix(word){
        for(let char of word){
            if(!node.children[char]){
                return false;
            }
            node=node.children[char];
        }
        return true;
    }

    display(){
        let words=[];
        this.collectionWords(this.root,"",words);
        console.log(words);

    }

    collectionWords(node,prefix,word){
        if(node.isEnd){
            word.push(prefix);
        }

        for(let char in node.children){
            this.collectionWords(node.children[char],prefix + char,word);
        }
    }
} 

const tr = new Trie()

tr.insert("Mohit");
tr.insert("Mog");
tr.insert("Moh");
tr.insert("Hitman");

console.log(tr.display());