class TrieNode{
    constructor(){
        this.children={};
        this.isEndOfWord=false;
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
        node.isEndOfWord=true;
    }

    search(word){
        let node=this.root;
        for(let char of word){
            if(!node.children[char]){
                return false;
            }
            node=node.children[char];
        }
        return node.isEndOfWord;
    }

    startWith(prefix){
        let node=this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return false;
            }
            node=node.children[char];
        }
        return true;
       
    }

    display(){
        const word=[];
        this.collectionWords(this.root,"",word);
        return word;
    }

    collectionWords(node,prefix,words){
        if(node.isEndOfWord){
            words.push(prefix);
        }

        for(let char in node.children){
            this.collectionWords(node.children[char],prefix + char,  words);
        }
        
    }

    hasSufix(word){
        let coll=this.display();
        for(let w of coll){
           if( w.endsWith(word)){
            return true;
           }
        }

        return false;
    }
}

const trie = new Trie();

trie.insert("mohit");
trie.insert("moh");
console.log(trie.display())
console.log(trie.search("moh"));
console.log(trie.hasSufix("ooh"))