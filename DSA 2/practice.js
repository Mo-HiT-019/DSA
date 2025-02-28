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
        return node.isEnd;
    }

    hasPrefix(word){
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
        let word=[];
        this.collectionWords(this.root,"",word);
        return word;
        

    }

    collectionWords(node,prefix,word){
        if(node.isEnd){
            word.push(prefix);
        }
        for(let char in node.children){
            this.collectionWords(node.children[char] ,prefix + char,word);
        }
    }

    hasSuffix(word){
        let arr=this.display();
        for(let w of arr){
            if(w.endsWith(word)){
                return true;
            }
        }
        return false;
    }
    
}

const trie = new Trie();

trie.insert("mohit");
trie.insert("moh");
trie.insert("ajith");

console.log(trie.search("moh"));
console.log(trie.hasSuffix('hit'))
console.log(trie.display());