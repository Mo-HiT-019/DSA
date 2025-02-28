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
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode();
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
        return true;
    }

    display(){
        let word=[]
        this.collection(this.root,"",word);
        return word
    }

    collection(node,prefix,words){
        if(node.isEnd){
             words.push(prefix);
        }
        for(let char in node.children){
            this.collection(node.children[char],prefix+char,words)
        }
    }
}


const trie = new Trie();

trie.insert("mohit");
trie.insert("moh");
console.log(trie.display())
console.log(trie.search("moh"));