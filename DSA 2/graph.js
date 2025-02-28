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
                this.vertices[edge]=[]
            }
                this.vertices[edge].push(vertex);
        }
    }

    printGraph (){
        for(let vertex in this.vertices){
            const edge=this.vertices[vertex];
            console.log(`Vertex -> Edge :${vertex} -> ${edge.join(',')} `);
        }
    }

    bfs(source){
        const visited={};
        const queue=[source];
        visited[source]=true;

        while(queue.length){
            let currentVertex=queue.shift();
            console.log(currentVertex);

            this.vertices[currentVertex].forEach(neighbour => {

                if(!visited[neighbour]){
                    visited[neighbour]=true;
                    queue.push(neighbour);
                }
                
            });
                
            };
                
    };

    dfs(source,visited={}){
        visited[source]=true;
        console.log(source);

        this.vertices[source].forEach(neighbour=>{
            if(!visited[neighbour]){
                this.dfs(neighbour,visited);
            }
        })
    }

    remove (vertex){

        for(const v in this.vertices){
            this.vertices[v]=this.vertices[v].filter((edge)=>{
                if(edge === vertex){

                    console.log(`Removing edge from vertex ${v} to ${vertex}`);
                    return false;
                }

                return true;
            })
        }

        delete this.vertices[vertex];
    }

    clone(){
        const newGraph = new Graph();

        for(let vertex in this.vertices){
            if(!newGraph.vertices[vertex]){
                newGraph.vertices[vertex]=[];
            }
            this.vertices[vertex].forEach(edge=>{
                newGraph.insert(vertex,edge,false);
            })
        }
        return newGraph;
    }

}





const gr = new Graph();

gr.insert(5,6,true);
gr.insert(6,4,false);
gr.insert(4,3,false);
gr.insert(3,6,true);
gr.insert(3,5,true);

gr.printGraph();

//gr.bfs(5);

gr.dfs(5)

gr.remove(3);

gr.dfs(5);
