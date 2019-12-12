//********************** Types of Searching *******************/
/**
 * Linear Search
 * Binary Search
 * Breadth First Search
 * Depth First Search
 */

//********************** Linear Search *************/
/**
 * Finding a value within a list
 * Sequentially check every element on the list
 * Time Complexity = O(n)
 * In javascript, indexOf,find,findIndex,includes are using linear search
 * 
 */

//********************** Binary Search *************/
/**
 * Is that a better way than linear search to search elements ?
 * In the case where my list is sorted, we have binary search
 * 
 * Binary search start in the middle element
 * check right & left if higher or lower, and discard lower elements
 * and go to the middle again and again
 * 
 * Familiar to Binary Search Tree data structure approch
 * Use also Divide&Conquer 
 * See Tree.js to have a exemple of linear & binary search
 * 
 * But, we have do to something called traversals
 * Going from node to node, because we need all nodes
 * Maybe we want to add attribut on a node
 * 
 * So, its a linear operation
 * How we do that
 * With Breadth First Search (BFS) & Depth First Search (DFS)
 * But the Big O are the same, O(n)
 */


//********************** BFS & DFS *************/
/**
 * BFS = Start with the root node, and go left to right on each level one by one 
 * DFS = Commence avec le root node, et traverse tout son coté gauche jusqu'au dernier noeud; S'il en reste un non visité, 
 * remonte d'un cran pour accèder au noeud.
 * 
 */


//********************** BFS VS DFS *************/
/**
   BFS =   Time Complexity O(n) 
           Shortest Path
           Closer Nodes 
           BUT 
           More Memory
     
  DFS =    Time Complexity O(n)
           Less Memory
           BUT
           Can get slow
 
 
   RULES : 
   If you know a solution is not far from the root of the tree:
   BFS 

   If the tree is very deep and solutions are rare, 
   BFS (DFS will take long time. )

   If the tree is very wide:
   DFS (BFS will need too much memory)

   If solutions are frequent but located deep in the tree
   DFS

   Determining whether a path exists between two nodes
   DFS

   Finding the shortest path
   BFS
 */

//See Binary Search Tree file
function BreadthFirstSearch() {
  let currentNode = this.root;
  let list = [];
  let queue = [];
  queue.push(currentNode);

  while (queue.length > 0) {
    currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return list;
}

function BreadthFirstSearchRecursive() {
  
}