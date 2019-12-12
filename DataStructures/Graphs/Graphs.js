/**
 
*** Introduction
    Set of values that are related in a pair wize fashion
    Each item is called a Node (Vertex)
    There are connected by a Edge (Links)
    Ex : Roads, Family ...
     With the graphs , we can also have information on the edges , not only the nodes


*** Types of graphs
    1:
    - Directed      => can only go by one direction (sauf si le lien précise les deux sens)
    - Undirected    => Move and back between nodes (unidirectionnal)
    Useful for describing traffic
    2:
    - Weigthed      =>  Also edges have values
    - Unweighted    =>  Only node have values
    3:
    - Cyclic        => Go to the nodes, and back to the first (circle)
    - Acyclic       => No way to go back    
   
*** Pros and Cons
    Indispensable for relationships
    Scaling is hard

*/

class Graph { 
    constructor() { 
      this.numberOfNodes = 0; 
      this.adjacentList = {}; 
    } 
    addVertex(node)  { 
      this.adjacentList[node] = []; 
      this.numberOfNodes++;
    } 
    addEdge(node1, node2) { 
      //uniderected Graph 
      this.adjacentList[node1].push(node2); 
      this.adjacentList[node2].push(node1); 
    } 
    showConnections() { 
      const allNodes = Object.keys(this.adjacentList); 
      for (let node of allNodes) { 
        let nodeConnections = this.adjacentList[node]; 
        let connections = ""; 
        let vertex;
        for (vertex of nodeConnections) {
          connections += vertex + " ";
        } 
        console.log(node + "-->" + connections); 
      } 
  } 
  } 
  
  var myGraph = new Graph();
  myGraph.addVertex('0');
  myGraph.addVertex('1');
  myGraph.addVertex('2');
  myGraph.addVertex('3');
  myGraph.addVertex('4');
  myGraph.addVertex('5');
  myGraph.addVertex('6');
  myGraph.addEdge('3', '1'); 
  myGraph.addEdge('3', '4'); 
  myGraph.addEdge('4', '2'); 
  myGraph.addEdge('4', '5'); 
  myGraph.addEdge('1', '2'); 
  myGraph.addEdge('1', '0'); 
  myGraph.addEdge('0', '2'); 
  myGraph.addEdge('6', '5');
  
  myGraph.showConnections(); 