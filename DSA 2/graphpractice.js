class Graph{
    constructor(){
        this.vertices={}

    }

    insert(vertex,edge,isBidirectional=true){
        if(!this.vertices[vertex]){
            this.vertices[vertex]=[];
        }
        this.vertices[vertex].push(edge);

        if(isBidirectional){
            if(!this.vertices[edge]){
                this.vertices[edge]=[];
            }
            this.vertices[edge].push(edge);
        }
    }

    printGraph(){
        for(let v in this.vertices){
            let edge=this.vertices[v];
            console.log(`${v}->${edge.join(',')}`);
        }
    }

    bfs(source){
        let visited={}
        visited[source]=true;
        let queue=[source];

        while(queue.length){
            let currentVertex=queue.shift();
            console.log(currentVertex);
            this.vertices[currentVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour]=true;
                    queue.push(neighbour);
                }
            })
        }
    }

    dfs(source,visited={}){
        visited[source]=true;
        console.log(source);

        this.vertices[source].forEach(neighbour=>{
            if(!visited[neighbour]){
                this.dfs(neighbour,visited);
            }
        })
    }

    remove(vertex){
        for(let v in this.vertices){
            this.vertices[v]=this.vertices[v].filter(edge=>{
                if(edge==vertex){
                    console.log(`Deleting edge ${vertex} from vertex ${v}`);
                    return false;
                }else{
                    return true
                }
            })

        }

        delete this.vertices[vertex];
    }
}

const gr = new Graph()

gr.insert(5,6,true);
gr.insert(6,4,false);
gr.insert(4,3,false);
gr.insert(3,6,true);
gr.insert(3,5,true);

gr.printGraph();


gr.bfs(5)


gr.remove(3)



