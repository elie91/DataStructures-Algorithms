/*

*** Introduction
	Arrays have a certain amout of memory that can be allocated
	Dynamics and static arrays can increase their memory once it hits a certain limits 
	and double up that memory in another location
	Hash tables solve this problem, by storing things whatewer we want in the memory
	But there were'ent ordered

	
*** What is a Linked List
	Contains some nodes with two elements : the value , and a pointer to the next node
	The first node is call the HEAD , and the last the TAIL
	LinkedList = Null Terminated => The last node point to NULL
	Node can contains any sort of dataType
	apples
	8947 --> grapes
				8742 --> pears
						372 --> null
  
 
*** Why Linked List
	Linked List allows to insert a value wherever i want in the list, by simply resseting a few pointers (With array, need to shift all items)
	Same for deleting
	Array = element is indexed ; Linked List = Start at the head , and traverse the list to find a element
	Array = element are located right next to each other in memory ; Linked list are scattered all over memory , like Hash Tables
	So iterating on a LL is little bit slower than a array
	The one advantage on LL is that there is some of order , not like hash tables


*** Big O Notation on LL
	Prepend = 0(1)
	Append =  0(1)
	Access =  O(n)
	Insert =  O(n)
	Delete =  O(n)

*/


/*** Implement a Linked List
	Create the below linked list:
	myLinkedList = {
		head: {
			value: 10
			next: {
				value: 5
				next: {
					value: 16
					next: null
				}
			}
		}
	};
*/

class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
	  this.head = {
		value: value,
		next: null
	  };
	  this.tail = this.head;
	  this.length = 1;
	}
	

	//Push on the top on the LL
	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	//Add to the beginning of the LL
	prepend(value){
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}


	insert(index, value){
		//Check params
		if(index >= this.length){
			return this.append(value);
		}
		const newNode = new Node(value);
		//On veut recup le noeud juste avant l'index passé
		//Pour qu'il pointe sur le nouveau noeud crée
		const leader = this.traverseToIndex(index - 1);
		const holdingPointer = leader.next;
		leader.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
		return this.printList();
	}

	remove(index){
		//Check params
		if(index >= this.length || typeof index !== 'number'){
			return 'Bad Input';
		}
		const nodeBefore = this.traverseToIndex(index - 1);
		const nodeDeleted = nodeBefore.next;
		nodeBefore.next = nodeDeleted.next;
		this.length--;
		return this.printList();
	}
  
  	traverseToIndex(index){
		let counter = 0;
		let currentNode = this.head;
		while(counter !== index){
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	printList(){
		const array = [];
		let currentNode = this.head;
		while(currentNode !== null){
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}	
		return array;
	}


	reverse(){
		if(!this.head.next){
			return this.head;
		}
		let first = this.head; //save le head
		this.tail = this.head; //tail actual = head reverse
		let second = first.next; 
		while(second){
			const temp = second.next;
			second.next = first;
			first  = second;
			second = temp;
		}
		this.head.next = null;
		this.head = first;

	}
}
    
  
/**
	***Doubly Linked List
	Each node has a pointer on the next node, but ALSO on the previous node
	Allow to traverse the linkedList by starting at the end
	But its use more memory
*/
class DoublyNode {
	constructor(value){
		this.value = value;
		this.next = null;
		this.previous = null;
	}
}

class DoublyLinkedList {
	constructor(value) {
	  this.head = {
		value: value,
		next: null , 
		previous : null
	  };
	  this.tail = this.head;
	  this.length = 1;
	}
	
	printList(){
		const array = [];
		let currentNode = this.head;
		while(currentNode !== null){
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}	
		return array;
	}

	//Push on the top on the LL
	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		newNode.previous = this.tail;
		this.tail = newNode;
		this.length++;
		return this;
	}

	//Add to the beginning of the LL
	prepend(value){
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head.previous = newNode;
		this.head = newNode;
		this.length++;
		return this;
	}


	insert(index, value){
		//Check params
		if(index >= this.length){
			return this.append(value);
		}
		const newNode = new Node(value);
		const nodeBefore = this.traverseToIndex(index - 1);
		const nodeAfter = nodeBefore.next;
		nodeBefore.next = newNode;
		newNode.previous = nodeBefore;
		newNode.next = nodeAfter;
		nodeAfter.previous = newNode;
		this.length++;
		return this.printList();
	}

	remove(index){
		//Check params
		if(index >= this.length || typeof index !== 'number'){
			return 'Bad Input';
		}
		const nodeBefore = this.traverseToIndex(index - 1);
		const nodeAfter = this.traverseToIndex(index + 1);
		const nodeDeleted = nodeBefore.next;
		nodeBefore.next = nodeDeleted.next;
		nodeAfter.previous = nodeDeleted.previous;
		this.length--;
		return this.printList();
	}
  
  	traverseToIndex(index){
		let counter = 0;
		let currentNode = this.head;
		while(counter !== index){
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
	
}

/**
	***Singly VS Doubly Linked List
	Singly => Simple Implementation , less memory , so delete and insert are a little bit faster
	But cannot iterate back to front

	Doubly => Can be iterated both from front and back ; also delete can start by the end
			  Fairly complexe, require more memory and stockage
			  Good for searching

	
	***Exercice - Reverse a Linked List
		[1, 10 , 16 , 88] => [88, 16 , 10 , 1]
		Go to the linkedList class

	***Linked List Reviews
	   Low Level DataStructure
	   Fast Insertion , Fast Deletion , Ordered, FLEXIBLE SIZE
	   Slow Lookup , more Memory
*/



