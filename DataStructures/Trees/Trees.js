/** 

*** Introduction
    Hierarchical structure , not linear
    can have zero or more child nodes
    Usually start with a root node
    every child descend from only one parent
    Parent child relathionnship, unidirectionnal
    A node can only point to his child (no reference to the parent)
    Many type of trees exists


*** Binary Trees
    Tree with few rules :
    Each child can only have one parent
    There is 2 types of binary trees
    1 - Full Binary Tree
        Each node has 0 or 2 children (not exact a the last level)

    2 - Perfect Binary Tree
        Each node has 0 or 2 childs
        The last level is completely full
        Really efficient ! Two properties
        1: Number of nodes on each level doubles as we move down
        2: Number of nodes on the last level equal to the number of nodes on all the other level + 1
        !! Half on the data are in the last level
        With this type, we encounter the Big 0 notation O(log N) (Big O file)


*** Binary Search Trees
    Subset of binary trees
    Really good for searching, comparing
    Better than hash tables because it preserve relationship
    Rules:
    - All child nodes in the right of the parent node increase , in the left decrease
    - A node can only have 2 children
      Ex:
            101
        33     105
      9   37  104  144   
    
    lookup = O(log N)
    insert = O(log N)
    delete = O(log N)

    Balanced VS Unbalanced BST:
    We can have a situation where the elements are like a LL , (78, 85 , 86 , 90 , 99) => need to go on each element
    Balanced give us a O(log N) notation
    Unbalanced give us a 0(n) notation
    So how we balance a tree ? there is algorithms
    Pros:
        Better than 0(n) when balanced , ordered , flexible size
    Cons:
        No O(1) operations


*** Binary Heap
    Another type of Tree
    Max Heap = The root node is the biggest , and the child are + en + smallest
    Min Heap = Inverse
    The value can be anything , not only numbers
    Really useful for priority queues
    We can organize the data by level of priority
    The insertion is left to right
    lookup = O(n)
    insert = O(log N) in case the value becomes the root node (bubble) , 0(1) sinon
    delete = O(log N) same
    -> Usually implemented with findMax() that is 0(1) , because root node always the max


*** Trie
    Specialized tree used in searching, most often with text
    Ex: If a word exist in a body of text , autocompletion
    Has a empty rood node
    can have multiple children , for exemple the letters , and then each letter has children with words that we can make
    O(length of the word)
    Advantage on space complexity , you not store the words himself


*** Implement a BST 
*/
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this.root.value;
        }

        let currentNode = this.root;

        while (currentNode) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            }
            if (value >= currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    lookup(value) {
        if (!this.root) {
            return false
        }
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            else {
                if (value >= currentNode.value) {
                    currentNode = currentNode.right;
                }
                else {
                    currentNode = currentNode.left;
                }
            }
        }
        return false;
    }

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //Option 1: No right child: 
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        //if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                            //if parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                    //Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {
                        //if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                            //if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                    //Option 3: Right child that has a left child
                } else {
                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }
                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }

    breadthFirstSearch() {
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
}



//Searching - Depth First Search
function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

/**

 *** Balancing our tree
    Two types of trees very popular:
    - AVL Tree
    - Red Black Tree
    Automatically rebalance themselves
    See resources





 */
