/*

*** Introduction
    Stack & Queues
    Linear data structure = go trough element sequentially one by one
    Implemented in a similar way
    The only difference is how the items get removed from the data structure
	Deal with the first and last elements on the data structure
    We can build stack & queues with using  array or Linked List
    Execpt that we have less methods that we can perform (Stack & Queus = High level data structure)
    You can control whoever use this data structure, his peform only this methods

*** Stack
    Elements get stacked on top on each other
    You can only access the first elements on the top
    LIFO = Last In First Out
    Web History using stacks
    Methods => 
    pop = (remove the last item at the top) => O(1)
    push = (add at the top) => O(1)
    peek = (view the top element) => O(1)
    lookup = O(n)

*** Queues
    Opposite of stack 
    FIFO = First In First Out
    Exemple : Printer 
    Methods => 
    enqueue = (add to the queue) = 0(1)
!!  dequeue = (remove the first element from queue) = 0(1)
    peek = (view the first element from the queue) => O(1)
    lookup = O(n)

    Why do not use array to build queues ?
    => Its inneficient, because with array , if we unshift, we have to shift all items


***Stack VS Queues

    array  = each other to memory , but double up his memory when limit reach 
    LL = scatteled over memory , extra memory with pointer , but more dynamic memory

    For stacks , array or LL are same
    For queues , never with a array => array have indexed , 
    So every time we dequeue, we have to shift all indexs O(n)
    But with LL , we have just to reset the pointer O(1)

*/

//***Implement stack with LL
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.bottom = newNode;
            this.top = newNode;
        }
        else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }
}

//***Implement stack with array
class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value)
        return this;
    }

    pop() {
        this.array.pop()
        return this;
    }

    isEmpty() {
        return this.array.length === 0 ? true : false;
    }
}

//***Implement Queue 
class Queue {
	constructor(){
	  this.first = null;
	  this.last = null;
	  this.length = 0;
	}
	peek() {
	  return this.first;
	}
	enqueue(value){
	  const newNode = new Node(value);
	  if (this.length === 0) {
		this.first = newNode;
		this.last = newNode;
	  } else {
		this.last.next = newNode;
		this.last = newNode;
	  }
	  this.length++;
	  return this;
	}
	dequeue(){
	  if (!this.first) {
		return null;
	  }
	  if (this.first === this.last) {
		this.last = null;
	  }
	  this.first = this.first.next;
	  this.length--;
	  return this;
	}
	//isEmpty;
  }